import React from "react";
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';


function loadStories() {
    require('../stories/HelloWorld.stories');
    require('../stories/Typography.stories');
    require('../stories/Container.stories');
    require('../stories/ButtonText.stories');
    require('../stories/TextArea.stories');
    require('../stories/ButtonGhost.stories');
    require('../stories/ButtonOutline.stories');
    require("../stories/ButtonFilled.stories");
    require('../stories/Checkbox.stories');
    require('../stories/InputText.stories');
    require('../stories/InputRadioBox.stories');
    require("../stories/ButtonFilled.stories");
}

addDecorator(withInfo)
configure(loadStories, module);