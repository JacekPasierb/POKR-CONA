// export const getBackgroundImage = async (
//   titleImage,
//   isMobile,
//   isTablet,
//   isDesctop,
//   isRetina
// ) => {
//   let imagePath = "";
//     if (isMobile) {
//       console.log("mobile");
//         imagePath = await import(`../../images/${titleImage}Mobile1x.png`);
//         console.log("imagePath");
//   } else if (isTablet) {
//     imagePath = await import(`../../images/${titleImage}Tablet1x.png`);
//   } else if (isDesctop) {
//     imagePath = await import(`../../images/${titleImage}Desctop1x.png`);
//   }
//   if (isRetina) {
//     if (imagePath.default) {
//       imagePath = imagePath.default.replace("1x.png", "2x.png");
//     } else {
//       imagePath = imagePath.replace("1x.png", "2x.png");
//     }
//   }

//   return imagePath.default || imagePath;
// };
