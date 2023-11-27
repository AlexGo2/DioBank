interface CardProps {
  title: String;
  paragraph: String;
}

const Card = ({ title, paragraph }: CardProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </>
  );
};

export default Card;
