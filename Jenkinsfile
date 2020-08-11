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
      //echo node-microservice-openshift/books
            stage('Build Docker Images'){
               def books = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/books/Dockerfile .")
               def search = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/search/Dockerfile .") 
               def videos = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/videos/Dockerfile .") 
               def web = docker.build("rangandocker/node-microservice:${env.BUILD_ID}","-f ${env.WORKSPACE}/web/Dockerfile .") 
              
            } 
            stage('Push Docker Images'){
                    //sh "docker push ${props.registry}/node-microservice:$tag_name1"
                     //sh "docker push ${props.registry}/node-microservice:$tag_name2"
                    // sh "docker logout ${props.registry}"
               books.push(${env.BUILD_ID})
               books.push("latest")
               
               search.push(${env.BUILD_ID})
               search.push("latest")
               
               videos.push(${env.BUILD_ID})
               videos.push("latest")
               
               web.push(${env.BUILD_ID})
               web.push("latest")
               
               echo "trying to push to docker hub"
            }   		    
   }
}
