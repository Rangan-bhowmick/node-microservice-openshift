node() {
   checkout scm
   def books
   def search
   def videos
   def web
   def props = load 'properties'
   def workspace = WORKSPACE
   //def VERSION = {props.version}
   def cur_date = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone("UTC"))
   //sh "git rev-parse --short HEAD > commit-id"
   //def commit_id = readFile('commit-id').trim()
   def tag_name1 = "$cur_date-${props.image_name1}".toString()
   def tag_name2 = "$cur_date-${props.image_name2}".toString()
   
   
   docker.withRegistry("https://registry.hub.docker.com", "private_docker_hub"){
      //echo node-microservice-openshift/books
            stage('Build Docker Images'){
                books = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/books/Dockerfile .")
                search = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/search/Dockerfile .") 
                videos = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/videos/Dockerfile .") 
                web = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/web/Dockerfile .") 
              
            } 
            stage('Push Docker Images'){
                    //sh "docker push ${props.registry}/node-microservice:$tag_name1"
                     //sh "docker push ${props.registry}/node-microservice:$tag_name2"
                    // sh "docker logout ${props.registry}"
               books.push("${env.BUILD_NUMBER}")
               books.push("latest")
               
               search.push("${env.BUILD_NUMBER}")
               search.push("latest")
               
               videos.push("${env.BUILD_NUMBER}")
               videos.push("latest")
               
               web.push("${env.BUILD_NUMBER}")
               web.push("latest")
               
               echo "trying to push to docker hub"
            }   		    
   }
}
