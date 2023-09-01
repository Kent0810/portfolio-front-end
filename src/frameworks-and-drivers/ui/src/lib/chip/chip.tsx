import './chip.scss';

type ChipProps = {
  chipValue: string;
};

export const Chip = ({ chipValue }: ChipProps) => {
  return <span className="chip">{chipValue}</span>;
};
