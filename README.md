# Project: Air quality

## The principle steps that i took :
1. Obtain the API key required for the project.

1. Using Postman, create an environment for the application and add the API key to it. Test the API to ensure that the key is working correctly.

1. Create an Express server and organize the project structure in a way that is scalable and maintainable.

1. Create async global error handler, and a global route to handle inexistant routes ,that render an html file. 

1. Create a MySQL database on your preferred cloud host, such as cloudclusters.io.

1. Generate a favicon for the application using a tool such as favicon.io. This will give the app a more professional appearance and prevent any "no such file or directory" errors.

1. Connect to the database using environment variables to avoid sharing your credentials in the public repository.

1. Add the air quality key to the .env file to prevent sharing your credentials in the public repository.

## API documentation

### End-point: nearest city data direct from air visual


The GET endpoint for nearest city data direct from Air Visual is a web API request that allows users to retrieve data on the air quality of the nearest city to a given location using real-time and forecasted air quality data.
#### Method: GET
>```
>http://api.airvisual.com/v2/nearest_city?lat= 46.19286&lon=2.23876&key=b0269620-7d17-4d07-83fb-57ed817db3a9
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: nearest city data direct from My API
StartFragment

The GET endpoint for nearest city data direct from My API is a web API request that retrieves air quality data for the nearest city to a given location, based on the provided latitude and longitude.
#### Method: GET
>```
>http://localhost:3333/api/v1/pollution?latitude=46.2276&longitude=2.2137
>```
#### Query Params

|Param|value|
|---|---|
|latitude|46.2276|
|longitude|2.2137|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: mostPollutedDatetime from My API
StartFragment

The GET endpoint "mostPollutedDatetime" from My API retrieves information on the most polluted time in France, based on data that is automatically stored using a cron job every 1 minut.
#### Method: GET
>```
>http://localhost:3333/api/v1/pollution/mostPollutedDatetime
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

