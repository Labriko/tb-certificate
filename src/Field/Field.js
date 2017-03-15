import React, { PropTypes } from 'react';
import i18next from 'i18next';
import { Row, Col, FormControl, Checkbox, FormGroup, ControlLabel } from 'react-bootstrap';

import { constants } from '../constants';
import FieldBox from '../FieldBox';

import './Field.css';

const Field = (props) => {
  const {
    chosen,
    id,
    style,
    handleFormControlChange,
    onResize,
    onCheckboxChange
  } = props;

  return (
    <Row className="field">
      <Col sm={6}>
        <Checkbox inline name={id} onChange={onCheckboxChange}>
          {i18next.t(`fields.${id}`)}
        </Checkbox>
        { chosen && (
          <div>
            <FormGroup className="form-group">
              <ControlLabel>{i18next.t('font_size')}</ControlLabel>
              <FormControl
                type="number"
                value={parseInt(style.fontSize, 10)}
                max={constants.maxFontSize}
                name={id}
                data-css-name="fontSize"
                placeholder={i18next.t('font_size')}
                onChange={handleFormControlChange}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <ControlLabel>{i18next.t('color')}</ControlLabel>
              <FormControl
                type="color"
                data-css-name="color"
                name={id}
                value={style.color}
                onChange={handleFormControlChange}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <ControlLabel>{i18next.t('text_align.title')}</ControlLabel>
              <FormControl
                value={style.textAlign}
                name={id}
                data-css-name="textAlign"
                componentClass="select"
                placeholder={i18next.t('text_align.title')}
                onChange={handleFormControlChange}
              >
                <option value="left">{i18next.t('text_align.left')}</option>
                <option value="center">{i18next.t('text_align.center')}</option>
                <option value="right">{i18next.t('text_align.right')}</option>
              </FormControl>
            </FormGroup>
          </div>
        )}
      </Col>
      <Col sm={6}>
        {chosen && <FieldBox onResize={onResize} id={id} style={style} />}
      </Col>
    </Row>
  );
};

Field.propTypes = {
  chosen:                  PropTypes.bool,
  id:                      PropTypes.string.isRequired,
  style:                   PropTypes.object.isRequired,
  handleFormControlChange: PropTypes.func.isRequired,
  onCheckboxChange:        PropTypes.func.isRequired,
  onResize:                PropTypes.func.isRequired,
};

Field.defaultProps = {
  chosen: false,
};

export default Field;
