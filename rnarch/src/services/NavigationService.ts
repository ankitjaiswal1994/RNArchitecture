import * as React from 'react';
import {
  NavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import { MainStackParamList } from 'screens/Navigation';

export type RouteNames = keyof MainStackParamList;

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate<T extends Record<any, any>>(
  name: RouteNames,
  params?: T,
) {
  navigationRef.current?.navigate(name, params);
}

export function replace<T extends Record<any, any>>(
  name: RouteNames,
  params?: T,
) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function goBack() {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
}
export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}
