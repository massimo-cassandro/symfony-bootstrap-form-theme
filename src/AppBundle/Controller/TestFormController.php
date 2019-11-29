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
          ->add('hidden1', HiddenType::class, array('required' => false))
          ->add('text1', TextType::class, array('required' => false))
          ->add('text2', TextType::class, array('required' => false))
          ->add('text3', TextType::class, array(
            'attr' => array('value'=>'Some values'),
            'required' => false
          ))

          // checkboxes
          ->add('cbox1', CheckboxType::class, array('required' => false))
          ->add('cbox2', CheckboxType::class, array('required' => false))
          ->add('cbox3', CheckboxType::class, array('required' => false))
          ->add('cbox4', CheckboxType::class, array('required' => false))
          ->add('cbox5', CheckboxType::class, array('required' => false))
          ->add('cbox6', CheckboxType::class, array('required' => false))
          ->add('cbox7', CheckboxType::class, array('required' => false))

          // multiple checkbox
          ->add('multiCbox1', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox2', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox3', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox4', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox5', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3',
                'Option 4'  =>  '4'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox6', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3',
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiCbox7', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))

          // grouped checkboxes
          ->add('groupedCbox1', ChoiceType::class, array(
            'required' => false,
            'choices' => [
              'Group A' => [
                'Option 1'  =>  1,
                'Option 2'  =>  2,
              ],
              'Group B' => [
                'Option 3'  =>  3,
                'Option 4'  =>  4,
              ],
            ],
            'expanded' => true,
            'multiple' => true
          ))

          // radios
          ->add('radios1', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Yes'    =>  1,
                'No'     =>  2,
                'Maybe'  =>  3
            ),
            'expanded' => true,
            'multiple' => false,
            'placeholder' => false
          ))

          // multiselect
          ->add('multiSelect1', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3'
            ),
            'expanded' => true,
            'multiple' => true
          ))
          ->add('multiSelect2', ChoiceType::class, array(
            'required' => false,
            'choices'  => array(
                'Option 1'  =>  '1',
                'Option 2'  =>  '2',
                'Option 3'  =>  '3',
                'Option 4'  =>  '4'
            ),
            'expanded' => true,
            'multiple' => false,
            'placeholder' => false
          ))

          // select
          ->add('select1', ChoiceType::class, array(
            'choices'  => array(
                'val1'    =>  '1',
                'val2'    =>  '2',
                'val3'    =>  '3',
                'val4'    =>  '4'
            ),
            'required' => false
          ))


          // other elements
          ->add('textarea1', TextareaType::class, array('required' => false))

        ->getForm();

        return $this->render('test_form/test_form.html.twig', array(
            'form'  =>  $form->createView()
        ));
    }

}
