import { Link } from 'react-router-dom';

interface HomeLinkProps {
  classes?: string;
}

export const HomeLink = ({ classes = '' }: HomeLinkProps) => {
  return (
    <Link to='/' className={classes}>
      ⬅️ Назад
    </Link>
  );
};
