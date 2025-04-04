import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, src, avg_color, alt }) => (
        <GridItem key={id}>
          <PhotosGalleryItem src={src} avg_color={avg_color} alt={alt} openModal={openModal} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
