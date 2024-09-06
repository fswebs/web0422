// import requests
// import json
 
// city = "Seoul"
// apikey = "(My API Key)"
// lang = "kr"
 
// api = f"""http://api.openweathermap.org/data/2.5/\
// weather?q={city}&appid={apikey}&lang={lang}&units=metric"""
 
// result = requests.get(api)
 
// data = json.loads(result.text)
 
// print(data)
 
// # 실행 결과 - 서버로부터 받은 데이터
// {'coord': {'lon': 126.9778, 'lat': 37.5683},
//  'weather': [{'id': 800, 'main': 'Clear', 'description': '맑음', 'icon': '01n'}],
//  'base': 'stations',
//  'main': {'temp': -3.38,
//   'feels_like': -3.38,
//   'temp_min': -4.34,
//   'temp_max': -3.22,
//   'pressure': 1030,
//   'humidity': 65},
//  'visibility': 10000,
//  'wind': {'speed': 0.51, 'deg': 170},
//  'clouds': {'all': 0},
//  'dt': 1672918169,
//  'sys': {'type': 1,
//   'id': 8105,
//   'country': 'KR',
//   'sunrise': 1672872432,
//   'sunset': 1672907203},
//  'timezone': 32400,
//  'id': 1835848,
//  'name': 'Seoul',
//  'cod': 200}