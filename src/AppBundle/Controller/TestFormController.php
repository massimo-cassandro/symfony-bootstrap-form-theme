<?php

namespace AppBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class TestFormController extends Controller
{
    /**
     * @Route(path="/test-form", name="test_form")
     */
    public function formAction(Request $request)
    {
        //$em = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder()
          // basic
          ->add('hiddenField1', HiddenType::class, array('required' => false))
          ->add('textField1', TextType::class, array('required' => false))
          ->add('textField2', TextType::class, array('required' => false))
          ->add('textField3', TextType::class, array(
            'attr' => array('value'=>'Some values'),
            'required' => false
          ))

          // checkboxes
          ->add('checkboxField1', CheckboxType::class, array('required' => false))
          ->add('checkboxField2', CheckboxType::class, array('required' => false))
          ->add('checkboxField3', CheckboxType::class, array('required' => false))
          ->add('checkboxField4', CheckboxType::class, array('required' => false))
          ->add('checkboxField5', CheckboxType::class, array('required' => false))
          ->add('checkboxField6', CheckboxType::class, array('required' => false))

          // select
          ->add('selectField1', ChoiceType::class, array(
            'choices'  => array(
                'val1'    =>  '1',
                'val2'    =>  '2',
                'val3'    =>  '3',
                'val4'    =>  '4'
            ),
            'required' => false
          ))


          // other elements
          ->add('textareaField1', TextareaType::class, array('required' => false))

        ->getForm();

        return $this->render('test_form/test_form.html.twig', array(
            'form'  =>  $form->createView()
        ));
    }

}
