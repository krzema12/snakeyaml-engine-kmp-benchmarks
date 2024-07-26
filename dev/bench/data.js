window.BENCHMARK_DATA = {
  "lastUpdate": 1722006348781,
  "repoUrl": "https://github.com/krzema12/snakeyaml-engine-kmp",
  "entries": {
    "SnakeKMP benchmarks": [
      {
        "commit": {
          "author": {
            "email": "oleg.smirnov@exactprosystems.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "698261de8d1328288d8dcb24d4db9af4ca4c0744",
          "message": "Add performance benchmarks to alert about performance issues (#215)\n\nCo-authored-by: Adam <897017+aSemy@users.noreply.github.com>\r\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2024-07-26T16:56:28+02:00",
          "tree_id": "ce61a19d531f2085224514bdec197bca25dc2a49",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/698261de8d1328288d8dcb24d4db9af4ca4c0744"
        },
        "date": 1722006348666,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 193.39939867364365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.28378587656799,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.05016769402986,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.06136430796461,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 115.00958954666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.67386028571428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}