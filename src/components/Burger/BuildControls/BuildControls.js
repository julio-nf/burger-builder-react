import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className={styles.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
);

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  ordered: PropTypes.func,
  disabled: PropTypes.object,
  price: PropTypes.number,
  purchaseable: PropTypes.bool,
};

export default BuildControls;
