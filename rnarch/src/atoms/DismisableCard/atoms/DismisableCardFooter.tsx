import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'atoms/Box';
import { Touch } from 'atoms/Touch';
import { Icon } from 'atoms/Icon';
import { Text } from 'atoms/Text';
import { PressEvent } from 'typings/events';

type DismisableCardFooterProps = {
  buttonLabel?: string;
  showIcon?: boolean;
  onPress?: PressEvent;
};
export const DismisableCardFooter: FC<DismisableCardFooterProps> = ({
  buttonLabel,
  showIcon,
  onPress,
}) => {
  return (
    <Box
      height="40px"
      width="100%"
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      borderBottomLeftRadius="card"
      borderBottomRightRadius="card">
      <Touch flexDirection="row" alignItems="center" onPress={onPress}>
        {showIcon === true ? (
          <Icon
            name="cross"
            color="grey.100"
            mr={3}
            style={styles.buttonIcon}
          />
        ) : null}
        <Text
          fontSize="10px"
          fontFamily="bold"
          letterSpacing="1.2px"
          textTransform="uppercase"
          color="primarytext.100">
          {buttonLabel}
        </Text>
      </Touch>
    </Box>
  );
};
const styles = StyleSheet.create({
  buttonIcon: {
    height: 8,
    width: 8,
    fontSize: 8,
  },
});
