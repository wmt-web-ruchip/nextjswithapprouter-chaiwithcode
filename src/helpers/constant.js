export const decoderData = [
  {
    id: "1",
    text: "Decoder1 Decoder1 Decoder1 Decoder1 Decoder1 Decoder1 Decoder1 Decoder1 Decoder1",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.14",
    tagTitle: "Nature Videos",
  },
  {
    id: "2",
    text: "Decoder2",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.15",
    tagTitle: "Nature Videos",
  },
  {
    id: "3",
    text: "Decoder3",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.16",
  },
  {
    id: "4",
    text: "Decoder4",
    image: null,
    video: null,
    status: "inactive",
    ip: "192:168:1.17",
    tagTitle: "Jazz Sessions",
  },
];

export const encoderData = [
  {
    id: "1",
    text: "Vlx-series-enc-2058",
    status: "active",
    ip: "192:168:1.12",
    tagTitle: "Jazz Sessions",
    videoId:"1",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/03/HouzQuest.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
  {
    id: "2",
    text: "Vlx-series-enc-2059",
    status: "inactive",
    ip: "192:168:1.13",
    tagTitle: "Nature Videos",
    videoId:"2",
    image: 
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/03/Video-Streaming-App.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
  {
    id: "3",
    text: "Vlx-series-enc-2060",
    status: "active",
    ip: "192:168:1.14",
    videoId:"3",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2021/08/Yudu-1.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
  {
    id: "4",
    text: "Vlx-series-enc-2061",
    status: "active",
    ip: "192:168:1.15",
    videoId:"4",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2020/10/elatv.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
  {
    id: "5",
    text: "Vlx-series-enc-2062",
    status: "inactive",
    ip: "192:168:1.16",
    tagTitle: "Distillery Tours",
    videoId:"5",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/03/Primally-Nourished.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
  {
    id: "6",
    text: "Vlx-series-enc-2063",
    status: "inactive",
    ip: "192:168:1.17",
    videoId:"6",
    image:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/03/Primally-Nourished.webp",
    video:
      "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
  },
];
export const plainOptions = [
  "Audio", "Video", "IR", "Serial", "USB"
];

export const encoderCardMenus = [
  {
    key: "1",
    label: "Send/Receive RS232 via Telent",
    icon: (
      <i
        className="icon-send-receive text-primary"
        style={{ fontSize: "20px" }}
      ></i>
    ),
  },
  {
    key: "2",
    label: "Send/Receive Infrared via Telent",
    icon: (
      <i
        className="icon-send-receive text-primary"
        style={{ fontSize: "20px" }}
      ></i>
    ),
  },
  {
    key: "3",
    label: "Settings",
    icon: (
      <i className="icon-setup text-primary" style={{ fontSize: "20px" }}></i>
    ),
  },
  {
    key: "4",
    label: "Copy",
    icon: (
      <i className="icon-copy text-primary" style={{ fontSize: "20px" }}></i>
    ),
    children: [
      {
        key: "2-1",
        label: "Copy Device Name",
      },
      {
        key: "2-2",
        label: "Copy Device MAC",
      },
      {
        key: "2-3",
        label: "Copy Device IP",
      },
    ],
  },
  {
    key: "5",
    label: "Web page",
    icon: (
      <i className="icon-webpage text-primary" style={{ fontSize: "20px" }}></i>
    ),
  },
  {
    key: "6",
    label: "Reboot Device",
    icon: (
      <i className="icon-reboot text-primary" style={{ fontSize: "20px" }}></i>
    ),
  },
  {
    key: "7",
    label: "Edid Editor",
    icon: (
      <i className="icon-reboot text-primary" style={{ fontSize: "20px" }}></i>
    ),
  },
];

export const profileManagementData = [
  {
    id: 1,
    title: "Admin",
    createdDate: "01/01/2023",
  },
  {
    id: 2,
    title: "Developer",
    createdDate: "01/01/2023",
  },
  {
    id: 3,
    title: "DJ",
    createdDate: "01/01/2023",
  },
  {
    id: 4,
    title: "RJ",
    createdDate: "01/01/2023",
  },
];

export const groupManagementData = [
  {
    id: 1,
    title: "Ground Floor",
    createdDate: "01/01/2023",
  },
  {
    id: 2,
    title: "Floor 1",
    createdDate: "01/01/2023",
  },
];

export const userManagementData = [
  {
    id: 1,
    title: "Admin",
    createdDate: "01/01/2023",
    role: "admin",
  },
  {
    id: 2,
    title: "User",
    createdDate: "01/01/2023",
    role: "user",
  },
  {
    id: 3,
    title: "James Anderson",
    createdDate: "02/02/2023",
    role: "user",
  },
  {
    id: 4,
    title: "Victoria Carrol",
    createdDate: "02/02/2023",
    role: "admin",
  },
];

export const macrosMockData = [
  { key: 1, title: "Test_Macro" },
  { key: 2, title: "Macro_New_Preset_1" },
  { key: 3, title: "Vlx-series-enc-5106" },
  { key: 4, title: "Custom_Preset" },
  { key: 5, title: "Macro_New_Preset_1" },
  { key: 6, title: "Macro_New_Preset_2" },
];

export const MacroCardData = [
  {
    id: 1,
    title: "Macro_New_Preset_1",
    noOfCommands: "7",
  },
  {
    id: 2,
    title: "Macro_New_Preset_2",
    noOfCommands: "21",
  },
  {
    id: 3,
    title: "Macro_New_Preset_1",
    noOfCommands: "14",
  },
  {
    id: 4,
    title: "Custom_Preset",
    noOfCommands: "6",
  },
  {
    id: 5,
    title: "Custom_Preset2",
    noOfCommands: "6",
  },
  {
    id: 6,
    title: "Custom_Preset3",
    noOfCommands: "6",
  },
  {
    id: 1,
    title: "Macro_New_Preset_1",
    noOfCommands: "7",
  },
  {
    id: 2,
    title: "Macro_New_Preset_2",
    noOfCommands: "21",
  },
  {
    id: 3,
    title: "Macro_New_Preset_1",
    noOfCommands: "14",
  },
  {
    id: 4,
    title: "Custom_Preset",
    noOfCommands: "6",
  },
  {
    id: 5,
    title: "Custom_Preset2",
    noOfCommands: "6",
  },
  {
    id: 6,
    title: "Custom_Preset3",
    noOfCommands: "6",
  },


  
];

export const UserLogsData = [
  {
    id: 1,
    userName: "Admin",
    description: "preview vlx-series-enc-5105 start",
    date: "2023-09-20 T20:37:17.960Z",
  },
  {
    id: 2,
    userName: "Victoria Carrol",
    description: "preview vlx-series-enc-5105 start",
    date: "2023-09-20 T20:37:17.960Z",
  },
  {
    id: 3,
    userName: "Admin",
    description: "preview vlx-series-enc-5105 start",
    date: "2023-09-20 T20:37:17.960Z",
  },
  {
    id: 4,
    userName: "Victoria Carrol",
    description: "preview vlx-series-enc-5105 start",
    date: "2023-09-20 T20:37:17.960Z",
  },
];

export const FirmwareData = [
  {
    id: 1,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "true",
    createdAt: "2000-01-01 12:00:00"
  },
  {
    id: 2,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "true",
    createdAt: "2000-01-01 10:00:00",
  },
  {
    id: 3,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "false",
    createdAt: "2000-01-01 12:40:00",
  },
  {
    id: 4,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update:"true",
    createdAt: "2000-01-01 11:20:00",
  },
  {
    id: 5,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "false",
    createdAt: "2000-01-01 11:00:00",
  },
  {
    id: 6,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "false",
    createdAt: "2000-01-01 12:45:00",
  },
  {
    id: 7,
    firmwareName: "Vlx-series-dec-2022",
    ipAddress: "192:168:1.12",
    version: "v2.5.5.rc",
    update: "true",
    createdAt: "2000-01-01 10:30:00",
  }
]

export const AlertsData = [
  {
    id:1,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:2,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:3,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:4,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:5,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:6,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:7,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:8,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  },
  {
    id:9,
    deviceId:"vlx-series-dec-2022",
    time: " Fri Sep 2 2023 2:35:30 GMT -04:00"

  }
]

export const decoderVideoWallData = [
  {
    id: "1",
    text: "Vlx-series-edec-2014",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.14",
    tagTitle: "Nature Videos",
  },
  {
    id: "2",
    text: "Vlx-series-edec-2016",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.15",
    tagTitle: "Nature Videos",
  },
  {
    id: "3",
    text: "Vlx-series-edec-2017",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.16",
  },
  {
    id: "4",
    text: "Vlx-series-edec-2018",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "inactive",
    ip: "192:168:1.17",
    tagTitle: "Jazz Sessions",
  },
  {
    id: "5",
    text: "Vlx-series-edec-2019",
    image: null,
    video: null,
    status: "inactive",
    ip: "192:168:1.16",
  },
  {
    id: "6",
    text: "Vlx-series-edec-2020",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.16",
  },
  {
    id: "7",
    text: "Vlx-series-edec-2021",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.16",
  },
  {
    id: "8",
    text: "Vlx-series-edec-2022",
    image: null,
    video: null,
    status: "active",
    ip: "192:168:1.16",
  },
];

export const encoderVideoWallData = [
  {
    id: "1",
    text: "Vlx-series-edec-2014",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.14",
    tagTitle: "Nature Videos",
  },
  {
    id: "2",
    text: "Vlx-series-edec-2016",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.15",
    tagTitle: "Nature Videos",
  },
  {
    id: "3",
    text: "Vlx-series-edec-2017",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.16",
    tagTitle: null,
  },
  {
    id: "4",
    text: "Vlx-series-edec-2018",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "inactive",
    ip: "192:168:1.17",
    tagTitle: "Jazz Sessions",
  },
  {
    id: "5",
    text: "Vlx-series-edec-2019",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "inactive",
    ip: "192:168:1.16",
    tagTitle: null,
  },
  {
    id: "6",
    text: "Vlx-series-edec-2020",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.16",
    tagTitle: null,
  },
  {
    id: "7",
    text: "Vlx-series-edec-2021",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.16",
    tagTitle: null,
  },
  {
    id: "8",
    text: "Vlx-series-edec-2022",
    image: null,
    video: "https://webmobtechcdn.nyc3.cdn.digitaloceanspaces.com/wmt_v4/2023/05/All-In-One-Video-Compressed-New.mp4",
    status: "active",
    ip: "192:168:1.16",
    tagTitle: null,
  },
];