window.BENCHMARK_DATA = {
  "lastUpdate": 1722453498183,
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
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "222a16ed497d7878cb4a0bc79b309fbda901970b",
          "message": "README: mention performance benchmarks (#216)\n\nTo give more visibility to the new report that we've got for this\r\nproject.",
          "timestamp": "2024-07-26T20:13:22+02:00",
          "tree_id": "6b624c1022190551e93e851d5444cef2c52da3d3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/222a16ed497d7878cb4a0bc79b309fbda901970b"
        },
        "date": 1722018080002,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.34412008333334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.052284791949035,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.98879088039216,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.440911744881895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.79618623809522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.15908457142856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2dd42aad195f6b6c4af694b882d91f8712ea396",
          "message": "Add performance comparison to snakeyaml-engine (#217)\n\nThis way we should have a reference point to the implementation where\r\nSnakeYAML Engine KMP was forked from.",
          "timestamp": "2024-07-27T23:09:11+02:00",
          "tree_id": "d52285bb870e0719ef41eb621e7bae6750ed6624",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c2dd42aad195f6b6c4af694b882d91f8712ea396"
        },
        "date": 1722114960230,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 176.045710040625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.28174163942599,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.879403584459212,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.19100868148148,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.354363064406776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.75379659268292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.74202057142858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "committer": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "c7cad7d36bb64f2c5a49be9ad16af3a8cfd5b78e",
          "message": "rename `Load.kt` to `Load.jvm.kt`",
          "timestamp": "2024-07-28T21:10:51+02:00",
          "tree_id": "a4e49bdeb361a0afecff7faf434f0d599730931d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c7cad7d36bb64f2c5a49be9ad16af3a8cfd5b78e"
        },
        "date": 1722194312812,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 184.77596734683829,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.32476048270965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.47376999382345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.7051217,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.99750857520662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.56434422391303,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.25816888888886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "4b30a632e9c64bc1757be2496bd588c7956aa8b0",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v2.3.0",
          "timestamp": "2024-07-29T15:42:05Z",
          "tree_id": "cea6ac275e25a1c76fbbac2259097caefc13925c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4b30a632e9c64bc1757be2496bd588c7956aa8b0"
        },
        "date": 1722268325985,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 215.59947558317305,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.56404775721007,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.351736529667313,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.40199295660378,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.52978653214286,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 156.44856565588233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.3525622857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "committer": {
            "email": "897017+aSemy@users.noreply.github.com",
            "name": "Adam",
            "username": "aSemy"
          },
          "distinct": true,
          "id": "c1a18043067cdc596f4c99d6e57eea19f21363a5",
          "message": "tidy benchmarks build script",
          "timestamp": "2024-07-31T21:08:53+02:00",
          "tree_id": "4f95b2c74bd59520a6c7ab6e5eeea9b9d883a117",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c1a18043067cdc596f4c99d6e57eea19f21363a5"
        },
        "date": 1722453498030,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 208.20344175186295,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.13384544543521,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.59449250388164,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.5058007,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.854524568965516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 115.66315691555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.83549294117648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}