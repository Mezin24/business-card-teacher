import cn from 'classnames';
import styles from './Divider.module.css';

export type DividerColor = 'black' | 'white';

interface DividerProps {
  color?: DividerColor;
  classes?: string;
}

export const Divider = ({ color = 'black', classes }: DividerProps) => {
  return (
    <div
      className={cn(styles.divider, classes)}
      style={{ backgroundColor: color }}
    />
  );
};
