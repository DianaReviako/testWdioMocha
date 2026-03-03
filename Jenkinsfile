pipeline {
    agent any

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
                    branches: [[name: "/main"]],
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
}
