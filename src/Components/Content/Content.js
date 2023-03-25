import './Content.css'
import RowData from '../../Constants/URLS'
import Row from '../Rows/Row'

export default function Content() {
  return (
    <div className='content_container'>
      {RowData.map((item, index) => {
        return <Row key={index} title={item.title} url={item.url} />;
      })}
    </div>
  );
}

