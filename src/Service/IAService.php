<?php 

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class IAService
{
    private $client;
    private $apiKey;

    public function __construct(HttpClientInterface $client, string $apiKey)
    {
        $this->client = $client;
        $this->apiKey = $apiKey;
    }

    public function chatWithIA(string $message): string
    {
        $response = $this->client->request('POST', 'https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->apiKey,
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'model' => 'gpt-4',
                'messages' => [['role' => 'user', 'content' => $message]],
            ],
        ]);

        $content = $response->toArray();
        return $content['choices'][0]['message']['content'];
    }



}