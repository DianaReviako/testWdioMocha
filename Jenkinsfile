pipeline {
    agent any

    parameters {
        string(name: 'OWNER_NAME', defaultValue: 'Diana Revyako', description: 'Owner name for Allure report')
        string(name: 'SEVERITY', defaultValue: 'normal', description: 'Severity level for Allure report')
        string(name: 'RESPONSIBLE_PERSON', defaultValue: 'Diana Revyako', description: 'Responsible person for Allure report')
    }

    tools {
        allure 'allureReport'
    }

    options {
        skipDefaultCheckout()
        buildDiscarder(logRotator(numToKeepStr: '5'))
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                echo 'Pulling code...'
                checkout scmGit(
                    branches: [[name: "main"]],
                    userRemoteConfigs: [[credentialsId: 'githubAuthToken', url: 'https://github.com/DianaReviako/testWdioMocha']]
                )
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    cleanUp(['allure-results', 'allure'])
                }
                echo 'Running tests...'
                bat "npm run test"
            }
        }
    }

    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }

    failure {
            script {
            mail to: 'eschoodzin@gmail.com',
                 subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Bummer, the build crashed.
                 
            Check the errors here: ${env.BUILD_URL}console

            Parameters:
            - Branch: ${params.BRANCH}
            - Tag: ${params.TAG}
            - Responsible Person: ${params.RESPONSIBLE_PERSON}
            """
            }
        }
}

def cleanUp(List folders) {
    folders.each { folder ->
        echo ">>> Cleaning up folder: ${folder}"
        bat "if exist ${folder} rmdir /s /q ${folder}"
    }
}
