node() {
   checkout scm
  
   docker.withRegistry("https:registry.hub.docker.com", "docker-hub"){
      
            stage('Build Docker Images'){
               sh "docker-compose build -t .
            }    		    
   }
}
