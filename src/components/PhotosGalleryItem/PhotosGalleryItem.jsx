import styles from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ src, avg_color, alt, openModal }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={src.large} alt={alt} onClick={()=> openModal(src.large, alt)} />
    </div>
  );
};
export default PhotosGalleryItem;
