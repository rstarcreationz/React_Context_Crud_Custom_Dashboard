export default function HeadingWrap({ title, alignment, paragraph }) {
  return (
    <div className={`_heading_wrap ${alignment}`}>
      <h5>{title}</h5>
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
}
