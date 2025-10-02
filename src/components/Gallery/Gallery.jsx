import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h2>Image Gallery</h2>
      <div className="images">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </div>
    </div>
  );
}

export default Gallery;