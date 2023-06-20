import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FooterSocialIcon } from "../styles/Footer.styled";
import { ProductSaleSocialContainer } from "../styles/Product/Product.styled";
const ProductSaleSocial = () => {
  return (
    <ProductSaleSocialContainer>
      <FooterSocialIcon color="#3B5999">
        <FacebookIcon />
      </FooterSocialIcon>
      <FooterSocialIcon color="#E4405F">
        <InstagramIcon />
      </FooterSocialIcon>
      <FooterSocialIcon color="#55ACEE">
        <TwitterIcon />
      </FooterSocialIcon>
    </ProductSaleSocialContainer>
  );
};

export default ProductSaleSocial;
