import React, { FC } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'atoms/Text';
import { Icon, IconProps } from 'atoms/Icon';
import { Touch } from 'atoms/Touch';
import NavigationService from 'utils/navigation/NavigationService';
import { TextProps } from 'atoms/AnimatedText';
import { Merge, LiteralUnion } from 'typings/utils';
import { LocaleString } from 'locales';
import { Row } from 'atoms/Row';
import { PressEvent } from 'typings/events';
import { Box } from 'atoms/Box';

type HeadingProps = Merge<
  { text: LiteralUnion<LocaleString, string> },
  TextProps
>;

export const Heading: FC<HeadingProps> = ({ text, ...props }) => {
  return (
    <Text
      variant="h1bold"
      color="primarytext.100"
      textAlign="center"
      {...props}>
      {text}
    </Text>
  );
};

type PageHeaderProps = {
  title?: string;
  description?: string;
  showBack?: boolean;
  defaultMarginBottom?: boolean;
  iconProps?: IconProps;
  rightText?: string;
  titleProps?: TextProps;
  onRightPress?: PressEvent;
  onBackPress?: PressEvent;
};
export const PageHeader: FC<PageHeaderProps> = ({
  title,
  showBack,
  description,
  iconProps,
  titleProps,
  rightText,
  onRightPress,
  onBackPress,
}) => {
  return (
    <SafeAreaView>
      <Row justifyContent="space-between" alignItems="center">
        {showBack ? (
          <Touch onPress={onBackPress || NavigationService.goBack}>
            <Icon
              ml="24px"
              mt="14px"
              mr="10px"
              textAlign="left"
              name="left-open"
              size={30}
              {...iconProps}
            />
          </Touch>
        ) : (
          <Box />
        )}
        {rightText ? (
          <Touch onPress={onRightPress}>
            <Text
              color="primarytext.100"
              mr="20px"
              mt="14px"
              textTransform="uppercase"
              fontSize="11px"
              fontFamily="regular">
              {rightText}
            </Text>
          </Touch>
        ) : null}
      </Row>
      {title ? (
        <Heading text={title} mt="45px" mx="22px" {...titleProps} />
      ) : null}
      {description ? (
        <Text
          mt="11px"
          textAlign="center"
          color="darkgrey.100"
          width="310px"
          alignSelf="center"
          fontFamily="medium"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="0.14px">
          {description}
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

export const PageHeaderLogin: FC<PageHeaderProps> = ({
  title,
  showBack,
  description,
  iconProps,
  titleProps,
  rightText,
  onRightPress,
}) => {
  return (
    <SafeAreaView>
      <Row justifyContent="space-between" alignItems="center">
        {showBack ? (
          <Touch onPress={NavigationService.goBack}>
            <Icon
              ml="24px"
              mt="14px"
              mr="10px"
              textAlign="left"
              name="left-open"
              size={30}
              {...iconProps}
            />
          </Touch>
        ) : (
          <Box />
        )}
        {rightText ? (
          <Touch onPress={onRightPress}>
            <Text
              color="primarytext.100"
              mr="20px"
              mt="14px"
              textTransform="uppercase"
              fontSize="11px"
              fontFamily="regular">
              {rightText}
            </Text>
          </Touch>
        ) : null}
      </Row>
      {title ? (
        <Heading text={title} mt="20px" mx="22px" {...titleProps} />
      ) : null}
      {description ? (
        <Text
          mt="11px"
          textAlign="center"
          color="darkgrey.100"
          width="310px"
          alignSelf="center"
          fontFamily="medium"
          fontSize="14px"
          lineHeight="20px"
          letterSpacing="0.14px">
          {description}
        </Text>
      ) : null}
    </SafeAreaView>
  );
};
