/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";
import animation from "assets/css/animation.module.css";

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Heading
        sx={styles.title}
        className={animation["tracking-in-contract-bck"]}
      >
        {title}
      </Heading>
      <Text
        as="p"
        sx={styles.description}
        className={animation["tracking-in-contract-bck"]}
      >
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: "center",
    maxWidth: 660,
    margin: ["0 auto 60px"],
  },
  title: {
    fontFamily: "heading",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ["-0.5px", null, null, null, null, null, "-1px"],
    img: {
      ml: ["15px"],
      position: "relative",
      top: "8px",
    },
  },
  description: {
    color: "heading",
    fontSize: "1.5rem",
    maxWidth: ["none", "none", "none", "none", 490],
  },
};
