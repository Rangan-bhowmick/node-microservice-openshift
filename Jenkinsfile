node() {
   checkout scm
   def props = load 'properties'
   //def VERSION = {props.version}
   def cur_date = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone("UTC"))
   //sh "git rev-parse --short HEAD > commit-id"
   //def commit_id = readFile('commit-id').trim()
   def tag_name = "$cur_date-${props.image_name}".toString()
   
   
   docker.withRegistry("https://registry.hub.docker.com", "docker-hub"){
      
            stage('Build Docker Images'){
               //sh "docker-compose build -t ${props.image_name} ."
               //sh "docker tag ${props.image_name} ${props.registry}/node-microservice-openshift:$tag_name"
               sh "docker-compose build"
               sh "docker-compose up -d"
            } 
            stage('Push Docker Images'){
                     sh "docker push ${props.registry}/node-microservice-openshift:$tag_name"
                     sh "docker logout ${props.registry}"
            }   		    
   }
}
