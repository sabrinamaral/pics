const ImageList = ({ images }) => {
  const list = images.map(({ urls, id, description }) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });

  return <div> {list} </div>;
};

export default ImageList;
