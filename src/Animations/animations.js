
export const titleHomeAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    delay: 0.3

  }
}
//
export const goToTopButtonAnimation = {
  whileHover: {
    scale: 1.1,
    y: -15,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}
//
export const githubButtonAnimation = {
  whileHover: {
    y: -7,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  }
}
//
export const iconsContactAnimation = {
  whileHover: {
    rotate: 360,
    transition: { duration: 1 }
  }
}
//
export const contactButtonAnimation = {
  whileTap: {
    scale: 1.1
  }
}
//
export const projectSectionIconsAnimation = {
  whileHover: {
    scale: 1.2
  }
}
