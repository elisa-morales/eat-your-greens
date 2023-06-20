import defaultImage from "/src/assets/defaultImage.jpg"

export default function useDefaultImage() {
  const replaceImage = (e) => {
    e.target.src = defaultImage
  }

  return { replaceImage }
}
