# time-app
This is a microservice application that displays time in UTC

## Architecture
The service is hosted on AWS ECS. The simplified architectural diagram is shown below:
![alt text](architecture.jpg?raw=true "Title")

The time-app service is not publicy accessible and can be reached through the internal application loadbalancer.
The opstest service sits in a public subnet talks to the time-app srvice through its internal loadbalancer.
Both services can scale in and out when the CPU is above 80% or 40% respectively.

## Pipeline
The pipeline used in this setup is AWS Codepipeline. The pipeline can deploy to any of the four environment viz: 
- develop == develop branch on git
- Staging == staging branch on git
- Accepatnce == acceptance branch on git
- Production == master branch on git

With AWS Codepipeline, we can deploy to another region simultenously.

## Setup Project on Local
  * install Docker and Node
  * Clone the repository `git clone git@github.com:Kenec/service-2.git`
  * Navigate to the directory of the project and run `Docker build -t time-app .`
  * Run the docker container with  `Docker run -p 3000:3000 opstest`

## Issues
To report an issue or give feedback, Click link
[Issues and Feedback](https://github.com/Kenec/service-1/issues)

## License
[MIT License](https://github.com/Kenec/service-1)