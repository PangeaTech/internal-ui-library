// Define custom prop types
export interface IPageLoaderProps {
  message?: string;
  imageUrl?: string;
}

const PageLoader: React.FC<IPageLoaderProps> = () => {
  return (
    <div
      className={`backdrop-blur-lg absolute content-height w-screen z-50  flex flex-col justify-center items-center`}
    >
      <div className="continer">
        <img
          src="/media/logos/turtlemoveslogo.png"
          className="absolute h-32 my-11 mx-8"
          alt="logo"
        />
        <div className="image-container rotating-image">
          <img src="/media/gif/loaderRing.svg" className="h-56" alt="logo" />
        </div>
      </div>
      <p className="mt-4 font-semibold text-base text-pink">Hi loading</p>
    </div>
  );
};

export default PageLoader;
