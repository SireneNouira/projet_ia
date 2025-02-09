<?php

namespace App\Controller;

use App\Service\IAService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

final class IAController extends AbstractController
{
    private $iaService;

    public function __construct(IAService $iaService)
    {
        $this->iaService = $iaService;
    }

    #[Route('/i/a', name: 'app_i_a')]
    public function index(Request $request): Response
    {
        $message = $request->request->get('message', '');
        $response = '';

        if ($message) {
            $response = $this->iaService->chatWithIA($message);
        }

        return $this->render('ia/index.html.twig', [
            'message' => $message,
            'response' => $response,
        ]);
     
    }

}
// // src/Controller/OpenAIController.php
// namespace App\Controller;

// use App\Service\OpenAIService;
// use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Annotation\Route;

// class OpenAIController extends AbstractController
// {
//     private $openAIService;

//     public function __construct(OpenAIService $openAIService)
//     {
//         $this->openAIService = $openAIService;
//     }

//     #[Route('/ask-openai', name: 'ask_openai')]
//     public function index(): Response
//     {
//         $message = 'Write a haiku about AI';
//         $response = $this->openAIService->getCompletion($message);

//         return new Response($response);
//     }
// }
