node() {
   checkout scm
   def books
   def search
   def videos
   def web
   def props = load 'properties'
   //def VERSION = {props.version}
   def cur_date = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone("UTC"))
   //sh "git rev-parse --short HEAD > commit-id"
   //def commit_id = readFile('commit-id').trim()
   def tag_book = "${props.image_name1}-$cur_date".toString()
   def tag_search = "${props.image_name2}-$cur_date".toString()
   def tag_videos = "${props.image_name3}-$cur_date".toString()
   def tag_web = "${props.image_name4}-$cur_date".toString()
   
   
   docker.withRegistry("https://registry.hub.docker.com", "private_docker_hub"){
      
            stage('Build Docker Images'){
                books = docker.build("${props.registry}/node-microservice:$tag_book","-f ${env.WORKSPACE}/books/Dockerfile .")
                search = docker.build("${props.registry}/node-microservice:$tag_search","-f ${env.WORKSPACE}/search/Dockerfile .") 
                videos = docker.build("${props.registry}/node-microservice:$tag_videos","-f ${env.WORKSPACE}/videos/Dockerfile .") 
                web = docker.build("${props.registry}/node-microservice:$tag_web","-f ${env.WORKSPACE}/web/Dockerfile .") 
              
            } 
            stage('Push Docker Images'){
               books.push()
               search.push()
               videos.push()
               web.push()
               
               echo "Successfully pushed to Docker-hub !!!"
            }   		    
   }
}
