/**
 * 底部选项卡样式配置
 */
export default {
  // 标题 + 图标
  tabTitles: [
    {
      title: '教学',
      icon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_play_unselected.png?raw=true',
      activeIcon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_play_selected.png?raw=true',
    },
    {
      title: '聊天室',
      icon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_chatroom_unselected.png?raw=true',
      activeIcon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_chatroom_selected.png?raw=true'
    },
    {
      title: '消息',
      icon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_message_unselected.png?raw=true',
      activeIcon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_message_selected.png?raw=true'
    },
    {
      title: '我',
      icon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_mine_unselected.png?raw=true',
      activeIcon: 'https://github.com/yuxuemei/react-music-player/blob/master/app/images/icon_bottom_mine_selected.png?raw=true'
    }
  ],
  // tab样式
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
}