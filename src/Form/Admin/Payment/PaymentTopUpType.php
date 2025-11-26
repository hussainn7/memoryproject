<?php

namespace App\Form\Admin\Payment;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;
use Symfony\Component\Validator\Constraints\NotBlank;

class PaymentTopUpType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('amount', NumberType::class, [
            'label' => 'Сумма пополнения, ₽',
            'scale' => 2,
            'html5' => true,
            'attr' => [
                'class' => 'form-control form-control-md',
                'min' => 0.01,
                'step' => '0.01',
            ],
            'constraints' => [
                new NotBlank([
                    'message' => 'Укажите сумму пополнения.',
                ]),
                new GreaterThan([
                    'value' => 0,
                    'message' => 'Сумма должна быть больше нуля.',
                ]),
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'method' => 'POST',
        ]);
    }
}

