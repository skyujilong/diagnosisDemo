/**
 * Created by lsc on 2014/11/29.
 */
define(['marionette'],function(Marionette){
    return Marionette.AppRouter.extend({
        appRoutes:{
            'diagnosis':'toDiagnosisIndex',
            'questions':'toQuestionsIndex',
            'exams':'toExams'
        },
        controller:{
            toDiagnosisIndex : function(){
                $('#header').find('.active').removeClass('active');
                $('#header').find('li:eq(0)').addClass('active');
                console.log('run to diagnosis');
            },
            toQuestionsIndex : function(){
                $('#header').find('.active').removeClass('active');
                $('#header').find('li:eq(1)').addClass('active');
                console.log('run to questions');
            },
            toExams : function(){
                $('#header').find('.active').removeClass('active');
                $('#header').find('li:eq(2)').addClass('active');
                console.log('run to exams');
            }
        }
//        routes:{
//            'diagnosis':'toDiagnosisIndex'
//        },
//        toDiagnosisIndex : function(){
//            console.log('run ......... to diagnosis index');
//        }
    });
});
