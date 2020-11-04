import styled from "styled-components/native";
import SimpleLine from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export const InputText = styled.TextInput`
  color: ${(props) => props.theme.textColor};
`;

export const InputTextBg = styled.TextInput`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.secondBackground};
`;

export const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;

export const PrimaryContainer = styled.View`
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const SimpleLineIcon = styled(SimpleLine)`
  color: ${(props) => props.theme.textColor};
`;

export const EntypoIcon = styled(Entypo)`
  color: ${(props) => props.theme.textColor};
`;

export const AntDesignIcon = styled(AntDesign)`
  color: ${(props) => props.theme.textColor};
`;

export const FontAwesomeIcon = styled(FontAwesome)`
  color: ${(props) => props.theme.textColor};
`;

export const MaterialIcon = styled(Material)`
  color: ${(props) => props.theme.textColor};
`;

export const FontistoIcon = styled(Fontisto)`
  color: ${(props) => props.theme.textColor};
`;

export const FontAwesome5Icon = styled(FontAwesome5)`
  color: ${(props) => props.theme.textColor};
`;
