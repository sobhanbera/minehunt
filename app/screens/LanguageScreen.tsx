import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useTranslation} from 'react-i18next';

import {appstyles} from '../styles';
import {useTheme} from '../contexts';
import {Header} from '../components';
import {LanguageCode, LanguageData, LanguagesList} from '../interfaces';
import {LANGUAGE_CODE_STORAGE_KEY} from '../constants';

interface Props {
    navigation: {
        navigate: Function;
    };
}
export default function LanguageScreen(props: Props) {
    const {i18n, t} = useTranslation();
    const {themeColors} = useTheme();

    const changeLanguage = async (languageCode: LanguageCode) => {
        await i18n.changeLanguage(languageCode, async (_err, _t) => {
            // setLanguage(languageCode);
            await AsyncStorage.setItem(LANGUAGE_CODE_STORAGE_KEY, languageCode);
        });
    };

    return (
        <View style={[appstyles.flex]}>
            <Header
                navigation={props.navigation}
                title={t('home:change_lang')}
            />

            {LanguagesList.map((language: LanguageData) => {
                return (
                    <TouchableHighlight
                        underlayColor={themeColors.surfacelight[0] + '7F'}
                        key={language.code}
                        onPress={() => changeLanguage(language.code)}>
                        <Text
                            style={[
                                styles.languageText,
                                {color: themeColors.text[0]},
                            ]}>
                            {language.lang}
                        </Text>
                    </TouchableHighlight>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    languageText: {
        fontSize: 18,
        // fontWeight: 'bold',
        paddingVertical: 9,
        paddingHorizontal: 30,
        marginVertical: 4,
    },
});
