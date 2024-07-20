import styles from "./card.module.scss";

type CardProps = {
  content: React.ReactNode
  details: string
};

const Card = ({content, details}: CardProps) => {
  return (
    <div className={`${styles.card}`}>
      <div className="">{content}</div>
      <p className="">{details}</p>
    </div>
  );
};

export default Card;
