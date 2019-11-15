<?php

namespace AppBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class TestController extends Controller
{
    /**
     * @Route(path="/test-form", name="test_form")
     */
    public function formAction(Request $request)
    {
        //$em = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder()
          ->add('campo_text', TextType::class, array(
            'required' => false
          ))
          ->add('campo_text2', TextType::class, array(
            'required' => true
          ))
          ->add('campoCheckboxStd', CheckboxType::class, array(
              'required' => false
          ))
          ->add('campoCheckboxStdReq', CheckboxType::class, array(
              'required' => true
          ))
          ->add('campoCheckboxSingle', CheckboxType::class, array(
              'required' => false
          ))
          ->add('campoCheckboxSingleReq', CheckboxType::class, array(
              'required' => true
          ))
          ->add('campoCheckboxSoloWidget', CheckboxType::class, array(
              'label'    => 'Campo checkbox solo widget',
              'required' => false
          ))

          ->add('campo_select', ChoiceType::class, array(
            'choices'  => array(
                'val1'    =>  '1',
                'val2'    =>  '2',
                'val3'    =>  '3',
                'val4'    =>  '4'
            ),
            'placeholder' => '',
            'required' => true
          ))
          ->add('esempio_label', TextType::class, array(
            'required' => false
          ))
          ->add('esempio_required', TextType::class, array(
            'required' => false
          ))

          // ->add('campo_textarea', TextareaType::class, array(
          //   'required' => true
          // ))

        ->getForm();

        return $this->render('test_form.html.twig', array(
            'form'  =>  $form->createView()
        ));
    }

}
