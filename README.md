
# RoleplayBot

These project is made it to help people, have a more comfortable RP escence.


# RoleplayBot

These project is made it to help people, have a more comfortable RP escence.


## Configs

#### Bot Configs

```http
  ./botconfig/config.json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Your bot token. |
| `prefix` | `string` | **Required**. Your bot prefix. |
| `SlashGlobal` | `string` | **Required**. true/false |
| `SlashCommandDirs` | `string` | **Not Recomended**. If you wan't to add more slash folders. |


#### Embeds config

```http
  ./botconfig/embeds.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Color`      | `hex` | **Required**. The color for the embeds. |
| `WrongColor`      | `hex` | **Required**. The color for the WrongEmbeds. |
| `Footertext`      | `string` | **Required**. The text that will appear on footer. |
| `Footericon`      | `string` | **Required**. The url to the icon for the footer embed. |


#### Settings config

```http
  ./botconfig/settings.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ownerID`      | `string` | **Required**. The id of the owner. |
| `antiCrash`      | `string` | **Required**. true/false. |
| `ping_message`      | `string` | **Required**. true/false. |
| `delete_commands`      | `string` | **Required**. true/false. |
| `somethingwentwrong_cmd`      | `string` | **Required**. true/false. |
| `default_cooldown_in_sec`      | `string` | **Required**. true/false. |
| `messages/timeout`      | `string` | **Required**. The texts and other configs. |

#### MongoDB

```http
  ./index.js line: 47
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `mongodb`      | `string` | **Required**. The url of the mongoDBUrl. |

#### Status

```http
  ./handlers/functions.js line: 707
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Status`      | `string` | **Required**. The status that will appear on the bot. |





## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color Embed | ![#3498db](https://via.placeholder.com/10/3498db?text=+) #3498db |
| Example Color WrongEmbed | ![#e01e01](https://via.placeholder.com/10/e01e01?text=+) #e01e01 |


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server (do the configs)

```bash
  node index.js
```


## Features

- DNI System
- Police Fines System
- More cooming soon...


## Tech Stack

**Client:** Discord

**Server:** Node, MongoDB


## Authors

- [@Tomato6966](https://github.com/Tomato6966?tab=repositories) Handler developer.
- [@MayiVT](https://github.com/MayiVT?tab=repositories) SRC developer.


![Logo](https://camo.githubusercontent.com/d55d8a7f07a103454ebb77b653d9600ce27e011f78395d9713b432c8c011c76a/68747470733a2f2f646973636f72642e6a732e6f72672f7374617469632f6c6f676f2e737667)


## License

[GNU](https://choosealicense.com/licenses/gnu/)

