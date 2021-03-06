import React from 'react';
import styles from './BuildControl.module.css';
import PropTypes from 'prop-types';

const BuildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BuildControl;
