// Alternating left/right timeline shared by Experience and Education
const Timeline = ({ items, renderItem }) => (
  <div className="container education-wrapper">
    {items.map((item, index) => (
      <div
        key={item.period}
        className={`timeline-block timeline-block-${index % 2 === 0 ? 'left' : 'right'}`}
      >
        <div className="marker"></div>
        <div className="timeline-content">
          <h5>{item.period}</h5>
          {renderItem(item)}
        </div>
      </div>
    ))}
  </div>
)

export default Timeline
