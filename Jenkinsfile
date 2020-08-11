node() {
   checkout scm
   def props = load 'properties'
   def workspace = WORKSPACE
   //def VERSION = {props.version}
   def cur_date = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone("UTC"))
   //sh "git rev-parse --short HEAD > commit-id"
   //def commit_id = readFile('commit-id').trim()
   def tag_name1 = "$cur_date-${props.image_name1}".toString()
   def tag_name2 = "$cur_date-${props.image_name2}".toString()
   
   
   docker.withRegistry("https://registry.hub.docker.com", "private_docker_hub"){
      echo ${env.WORKSPACE}
            stage('Build Docker Images'){
               // Creating and running the first one
                  dir ('${env.WORKSPACE}/books') {
                     //sh "docker build -t ${props.image_name1} ."
                     //sh "docker tag ${props.image_name1} ${props.registry}/node-microservice:$tag_name1"
                  }

               // Creating and running the first one
               dir ('${env.WORKSPACE}/search') {
                     //sh "docker build -t ${props.image_name2} ."
                     //sh "docker tag ${props.image_name2} ${props.registry}/node-microservice:$tag_name2"
               }
            } 
            stage('Push Docker Images'){
                    //sh "docker push ${props.registry}/node-microservice:$tag_name1"
                     //sh "docker push ${props.registry}/node-microservice:$tag_name2"
                    // sh "docker logout ${props.registry}"
            }   		    
   }
}
