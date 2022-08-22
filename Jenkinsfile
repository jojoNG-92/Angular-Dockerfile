/* Author: Jospin Anogo   anogoj@gmail.com */

def userdocker = "anogo"
def credentialID = "dockerHub"
def registry = "https://hub.docker.com"
def nomProjet = "Test-house-innovation"
def repository = "https://github.com/Tajjospin/house_innovation.git"
def portApp = 80
def portContainer = 8100
def nomImgae = userdocker+"/"+nomProjet
def version = "-$BUIL_ID"
def IMAGE_DEV_TAG = "-dev:Version-$BUILD_ID"
def image = nomImgae+"_dev:tagVersion-$BUILD_ID"*
/*def image = nomImgae+"_dev:tagVersion-2"*/
/*def imageProd = nomImgae+"_prod:tagVersion-$BUILD_ID"*/
/*def containerName = "devops-"+userGithub+"-"+nomProjet*/


pipeline{
    agent any
    options{
        timeout(time: 1, unit: 'HOURS')
    }

    stages{
        stage('Clone'){
            steps{
                git (branch: 'main', credentialsId: credential, url: repository)
            }
            
        }


        stage('Build image'){
            steps{
                script{
                   /* sh '''
                        cd house_innovation '''
                        */
                    docker.build(image, '.')
                }
            }
         
        }

        stage('test acceptance'){
            steps{
                script{
                    
                    docker.image(image).withRun("-p "+portContainer+":"+portApp+" --name "+nomProjet+"-test-$BUILD_ID"){ c ->
                    sh 'sleep 20s'
                    sh '''curl localhost:'''+portContainer+''' | grep -q "Author: Roody95"'''
                    }
                }
                
            }

        }

        stage('push sur la registry dev'){
            /*
                when {
                        expression {GIT_BRANCH =="origin/develop"}
                }
        */
        /*steps{
            script{
                sh '''
                    docker login -u $userdoker -p $PASSWORDDOCKER
                    docker tag $image $userdocker/$image:$IMAGE_DEV_TAG
                    docker push $userdocker/$image:$IMAGE_DEV_TAG
                '''
            }
        }*/
            steps{
                script{
                    docker.withRegistry(registry, credential){
                   
                     sh 'docker tag'+image+' '+image+'_dev:tagVersion'+version
                     sh 'docker push '+image+'_dev:tagVersion'+version
               
                    }
                }
            }
        }
        /*stage('push sur la registry Production'){
            
                when {
                        expression {GIT_BRANCH =="origin/main"}
                }
        
            steps{
                script{
                    docker.withRegistry(registryProd, credential){
                   
                     sh 'docker tag'+image+' '+image+'_prod:tagVersion'+version
                     sh 'docker push '+image+'_prod:tagVersion'+version
               
                    }
                }
            }
        }*/


        stage('supression des images en local'){
          steps{
            script{
              sh '''docker images |grep "'''+image+'''" | awk '{ print $3 }' | xargs --no-run-if-empty docker rmi -f'''
              sh '''docker images | awk '/^<none>/ { print $3 }' | xargs --no-run-if-empty docker rmi -f'''
              sh 'echo "image suprimé"'
            }
          }
        }

            
    }
    
}
