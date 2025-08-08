window.BENCHMARK_DATA = {
  "lastUpdate": 1754662219865,
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
          "id": "43a43071c0a8ecf2d00e768b49dd465ccd2efd98",
          "message": "Update plugin org.jetbrains.kotlinx.binary-compatibility-validator to v0.16.3",
          "timestamp": "2024-08-02T19:36:25Z",
          "tree_id": "04789f07d4efb99ed78d1d34ed72914553d41141",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/43a43071c0a8ecf2d00e768b49dd465ccd2efd98"
        },
        "date": 1722627854892,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 271.4315131960526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.63881206398509,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.048819072074586,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.60812180789473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.21222558976378,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.68169176486487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.46277542857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "0b0f53718c516ab924fd292f42f8468f8bb09e09",
          "message": "Rename benchmark.yml to benchmark.yaml\n\nI'm planning to rewrite the workflow using github-workflows-kt, and\n`yaml` extension is used there, so this change will provide a cleaner\ndiff.",
          "timestamp": "2024-08-03T21:41:14+02:00",
          "tree_id": "6ee1b3f35cf3dd58ef405d8f6dc239f0e474d44f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0b0f53718c516ab924fd292f42f8468f8bb09e09"
        },
        "date": 1722714548427,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 236.58640333106058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.57715939726504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.847286051250187,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.80041802173913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.970811332710284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.85327681086956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.35391583333333,
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
          "id": "8681d2766d695a13e9d7a7f32814eb70f1e76c3d",
          "message": "Update gradle/actions action to v4",
          "timestamp": "2024-08-04T03:50:12Z",
          "tree_id": "c10f4da86569f4562092e94a32d770fa5b0f2069",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8681d2766d695a13e9d7a7f32814eb70f1e76c3d"
        },
        "date": 1722743902614,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 220.11953674854982,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.817277566764666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.336202467987405,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.99073139027778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.65104215116279,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.5382559611111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.0998385714286,
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
          "id": "d745947909fe54d2802c06c70090f2b495fc1902",
          "message": "Use Kotlin DSL for benchmark workflow (#221)\n\nUse\r\n[github-workflows-kt](https://github.com/typesafegithub/github-workflows-kt)\r\nto implement the workflow in Kotlin, increasing maintainability and\r\nreadability.\r\n\r\nNote: proper, type-safe matrix strategy support is yet to be\r\nimplemented, it's tracked in\r\nhttps://github.com/typesafegithub/github-workflows-kt/issues/368.\r\n\r\n# Testing done\r\n1. Compared what's logged in the \"Store benchmark result\" step as\r\n\"Data\", and there are no differences.\r\n* version from `main` branch:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/10187305280/job/28181268567\r\n* version from this branch:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/10244555647/job/28338076917?pr=221\r\n2. Compared with https://www.yamldiff.com/. Most important differences:\r\n* the new version has a consistency check which is required to ensure\r\nthat the YAML reflects what's described in Kotlin\r\n* the new version doesn't have the reports preprocessing step\r\nimplemented directly, and instead delegates it to the Kotlin script\r\nitself\r\n* instead of using step outputs or env vars (so effectively to not\r\nrepeat ourselves with the file paths), I just used Kotlin's constants\r\n* github-workflows-kt proactively adds step IDs to be able to refer to\r\nthem whenever needed\r\n\r\n![SemanticDiff](https://github.com/user-attachments/assets/d77eb0fc-9129-4121-92a7-e3bc822a1318)",
          "timestamp": "2024-08-06T08:19:25+02:00",
          "tree_id": "81f75f7d2cf84f2821ef9512f0d1424d6eb3b620",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d745947909fe54d2802c06c70090f2b495fc1902"
        },
        "date": 1722925705340,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.845692198962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.11249018688615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.4551526961473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.42454588909091,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.2543225,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 138.70800602666668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.625066140776696,
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
          "id": "4efb541a1b1e53c8aa99992a43b3c55789f5ac0e",
          "message": "Update kotlin monorepo to v2.0.10",
          "timestamp": "2024-08-06T16:59:44Z",
          "tree_id": "fb673935dd9db86f809acfa7cd286fbdb94f9d48",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4efb541a1b1e53c8aa99992a43b3c55789f5ac0e"
        },
        "date": 1722964401068,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.9817386111111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 205.676603135414,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.85578080685628,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.657372408931849,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.41469733518518,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.115480167307695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.6841591235294,
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
          "id": "1cf283b564ba0ad732489da24daeb12f6fc982aa",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.0",
          "timestamp": "2024-08-14T12:59:57Z",
          "tree_id": "a974803ab294c8aef6ea3f8039446714ed9eec52",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1cf283b564ba0ad732489da24daeb12f6fc982aa"
        },
        "date": 1723640982894,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 233.6888821840833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 64.91351084181818,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.58536723493772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.951360177331154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.33051857142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.10189645744681,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.51672635,
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
          "id": "be6619b5da8452af9d815effa059078741d257df",
          "message": "Update dependency gradle to v8.10",
          "timestamp": "2024-08-14T16:51:42Z",
          "tree_id": "d57e0e7b372b8a4c2d3e899bb41c9a843f43da62",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/be6619b5da8452af9d815effa059078741d257df"
        },
        "date": 1723655128860,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.59052853043477,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 203.93221098122763,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 70.58141066181818,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.85448549005137,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.785161346225587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.28105,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.97807363716814,
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
          "id": "1f96bfc6d09ac67201345321aef0987dcb8d9b0a",
          "message": "Update dependency com.google.guava:guava to v33.3.0-jre",
          "timestamp": "2024-08-17T05:12:17Z",
          "tree_id": "d115f10b280ba437d9e13d846c38d10a498fa7dc",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1f96bfc6d09ac67201345321aef0987dcb8d9b0a"
        },
        "date": 1723872003586,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.086246416822426,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2108675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 178.8389627032258,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.02029875535715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.841076020723776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.802866561579581,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.31940546086958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3487c55c35553ac1d70cd8e99c6ea494b6c39539",
          "message": "Add GitHub workflow to publish a release (#228)\n\nPart of #94\r\n\r\nThe workflow uses [nexus-actions](https://github.com/nexus-actions) to\r\nmanage the staging repository. The publication was updated to use the\r\nnew URL for deployment when a staging repository ID is available.",
          "timestamp": "2024-08-21T12:40:11+02:00",
          "tree_id": "f4ad9cb5894469606f2a3d740d59148d94cc754e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3487c55c35553ac1d70cd8e99c6ea494b6c39539"
        },
        "date": 1724237558857,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 193.63807262818656,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.8999591489796,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.60766014084666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.041309767379666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.86614749999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 161.30146825526316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.56373133149606,
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
          "id": "2e33c66365df17a8db8c9b99d120f09215c9efdb",
          "message": "Check consistency and compilability of all GitHub workflows (#229)\n\nNow that we have a workflow that runs only on demand, and not in every\r\nPR or on the `main` branch, it's beneficial to have these extra checks.\r\n\r\nBTW, I noticed this piece is useful in almost every project, and I'm\r\nplanning to release some kind of util (a GitHub action?) that would\r\nencapsulate this logic. It's tracked in\r\nhttps://github.com/typesafegithub/github-workflows-kt/issues/213\r\n\r\nExamples of using this approach in other repos:\r\n*\r\nhttps://github.com/typesafegithub/github-workflows-kt/blob/0e91c566849a5883b39021a5ecbc18d25b006c1b/.github/workflows/build.main.kts#L95\r\n*\r\nhttps://github.com/typesafegithub/github-actions-typing-catalog/blob/667df7ec3fc639d19e278fc5956a9f753b26bb90/.github/workflows/test.main.kts#L14",
          "timestamp": "2024-08-21T14:32:02+02:00",
          "tree_id": "b5acd7f87c6427e11472e15f211abd7bc91f134d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2e33c66365df17a8db8c9b99d120f09215c9efdb"
        },
        "date": 1724244046470,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.3486369142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2633219444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.2827454971282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.29647274999999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.452803451634175,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.61922506724033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.764360479207916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52b82f822d784f2c581f1c6cbdd14fbb1a956c68",
          "message": "Execute drop staging repo job in case of failure (#230)\n\nIn the test run the job to drop staging repo was not executed after\r\npublication failed. This should solve the problem.\r\n\r\nPart of #94",
          "timestamp": "2024-08-21T15:14:12+02:00",
          "tree_id": "9b3a2048037b363684860602e60b37bfab2a3efb",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/52b82f822d784f2c581f1c6cbdd14fbb1a956c68"
        },
        "date": 1724246773315,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.53440263571427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 187.0897911444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 219.55571573615015,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 61.90048586363637,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.029376897459954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.317772786068875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.7723822857143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "ef67844c272f9efe55418a3e2d5a9ed5149024d8",
          "message": "Prepare for next dev cycle",
          "timestamp": "2024-08-22T08:20:43+02:00",
          "tree_id": "4e9909bfac23d3a210e9a0f04afe8247133f9c37",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ef67844c272f9efe55418a3e2d5a9ed5149024d8"
        },
        "date": 1724308143369,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 194.9578207023529,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.13773301698112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.64980126762019,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.395001562403593,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.948914910156255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.56313604782608,
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
          "id": "71c5dd54adffa546e88880aecf3687837dbfc660",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-benchmark-runtime to v0.4.12",
          "timestamp": "2024-08-23T12:55:54Z",
          "tree_id": "41d984ec97a6937a39eedf950d452751b51c9a7a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/71c5dd54adffa546e88880aecf3687837dbfc660"
        },
        "date": 1724418298499,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.1935979,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.07731314285712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.70077261666668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.18542097991423,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.29358567115383,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.745525682895654,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.816032471558977,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "8731549144249f0d8131082e130839c1b29d1c21",
          "message": "Update plugin org.jetbrains.kotlinx.benchmark to v0.4.12",
          "timestamp": "2024-08-23T15:42:47Z",
          "tree_id": "5b7ce43b464300b96fead5ebe4f86de03ea97f71",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8731549144249f0d8131082e130839c1b29d1c21"
        },
        "date": 1724428195400,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.4901703125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 185.8611675530849,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.56740219245282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.74571832178075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.106533577479109,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 158.72009794117645,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.61653994090909,
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
          "id": "c91386a065e82be79f3761f6bb5bb6abf8d49a72",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.7.2",
          "timestamp": "2024-08-29T02:24:18Z",
          "tree_id": "b60ba0d3380f0e760290005ddb66c75ad2092d38",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c91386a065e82be79f3761f6bb5bb6abf8d49a72"
        },
        "date": 1724898882271,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.0406602404762,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.13607676470588,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 237.90191495847384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.76504508157895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.61924279289856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.039139186487954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.61353478679244,
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
          "id": "7e76f89d8e0ee1656df1b8790e5008fab410d10e",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v3",
          "timestamp": "2024-09-01T22:19:03Z",
          "tree_id": "52d4cd0a9bf439f6d9935439f718e82106e2e998",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/7e76f89d8e0ee1656df1b8790e5008fab410d10e"
        },
        "date": 1725229675603,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.0224432598039,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.28575822941175,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.57523471928532,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.573464776382128,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.91088229512195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.517898695180726,
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
          "id": "329192c62eb03c93d0a547dd0ef59f24444bcbb1",
          "message": "Do not use custom inputs when calling benchmark action (#236)\n\nUses a new feature of the bindings where one can specify an expression\r\nand assign it to an `_Untyped` field.",
          "timestamp": "2024-09-06T13:47:50+02:00",
          "tree_id": "c35a4c37a847407a1a75c03d32be64ca5469d90a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/329192c62eb03c93d0a547dd0ef59f24444bcbb1"
        },
        "date": 1725623759237,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.94391632459016,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.59179147115384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 219.43353051687095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.03209889766039,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.29272460286919,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.96953492222221,
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
          "id": "679f6c1ab2440bb90486223619d09c8650399c50",
          "message": "Update plugin dev.adamko.dokkatoo-html to v2.4.0",
          "timestamp": "2024-09-08T15:10:46Z",
          "tree_id": "68c163d01be40ffee281f31d994542ccd6391019",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/679f6c1ab2440bb90486223619d09c8650399c50"
        },
        "date": 1725808806289,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.66401100612245,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.18243331992608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.053735744703644,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.238530864761966,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.16294065806452,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 160.1330561411765,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.11511083333335,
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
          "id": "2046d30185c86cc1f419f0d31d9657bf3da4c387",
          "message": "Update dependency gradle to v8.10.1",
          "timestamp": "2024-09-09T20:32:02Z",
          "tree_id": "83d590ef42b9599894a58df08dc8caa410e9dab5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2046d30185c86cc1f419f0d31d9657bf3da4c387"
        },
        "date": 1725915026788,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 156.2600291176471,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.24213945079365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 69.63434755925927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 207.08429119908087,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.03856014657933,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.249845609449855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 275.58646081666666,
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
          "id": "d97a7ca61b28830ef823ba73fe0f52c553301fc6",
          "message": "Update dependency com.squareup.okio:okio to v3.9.1",
          "timestamp": "2024-09-13T00:02:02Z",
          "tree_id": "d35ac46207878649cef2c7d1839e3e24219a7861",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d97a7ca61b28830ef823ba73fe0f52c553301fc6"
        },
        "date": 1726186251871,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.51672628571427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.12153663529412,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 239.291507089908,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.9705420657733,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.653969670044905,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.3959940263566,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.14847661276596,
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
          "id": "fc23d4115d45424f20737df799ebc7abef9f67a0",
          "message": "Update dependency com.squareup.okio:okio-bom to v3.9.1",
          "timestamp": "2024-09-13T04:04:26Z",
          "tree_id": "7833fe11980ae5b43b7daf5ce8bc410f733acdc4",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fc23d4115d45424f20737df799ebc7abef9f67a0"
        },
        "date": 1726200718646,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.57740692125984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 141.27785472222223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.54564787142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.4741909981132,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.82986913335557,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.81644971792327,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.337257523813514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "cfbd929bc40e5a3c48c042571477ad78275bf26a",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.7.3",
          "timestamp": "2024-09-19T18:45:08Z",
          "tree_id": "2ddba52c68d122a4e6f31654d7eeb608e32de9ea",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/cfbd929bc40e5a3c48c042571477ad78275bf26a"
        },
        "date": 1726771976751,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.92050628571425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 68.0176105076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.61550305143961,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.233271282717133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 210.68283447223297,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.79185023095238,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.59502404042556,
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
          "id": "321fcaa0475826ae9e4eb74819c633c158923d6b",
          "message": "Update dependency org.snakeyaml:snakeyaml-engine to v2.8",
          "timestamp": "2024-09-19T22:03:41Z",
          "tree_id": "45c26acb12da68a619d38df2286630e66a0b19ce",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/321fcaa0475826ae9e4eb74819c633c158923d6b"
        },
        "date": 1726783893186,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 154.13281843750002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.98637393076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.9007484309524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.4315624851852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.84607707253592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.495622940986994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 235.95730527605264,
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
          "id": "ce3b48aa5a629fedde970e8421b4dadba643d967",
          "message": "Update dependency com.google.guava:guava to v33.3.1-jre",
          "timestamp": "2024-09-24T02:27:24Z",
          "tree_id": "3a44e8fc2fcb3ceb7c0436291917124b65603f60",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ce3b48aa5a629fedde970e8421b4dadba643d967"
        },
        "date": 1727145417548,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.29425537962963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.98806450887962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.225385763194359,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 186.3868591137931,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.26211457142858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 55.33946067244898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 170.2149042,
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
          "id": "b50ef5937b3d341d419e2641c8d1bae9dd5ddaf8",
          "message": "Update dependency gradle to v8.10.2",
          "timestamp": "2024-09-24T04:17:19Z",
          "tree_id": "51f58fb25d3dc0529d40e7b51b65862cb90a93c0",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b50ef5937b3d341d419e2641c8d1bae9dd5ddaf8"
        },
        "date": 1727152063833,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.0024444328125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.2182286111111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.14828083773585,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.747160361919235,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.187866065536834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 205.25584053823013,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.23372474680852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63486177ef429f87fd6f2a43df5fba34337c235f",
          "message": "Fix replace hint for Compose.composeAllFromString (#246)\n\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2024-09-24T07:32:24+02:00",
          "tree_id": "f100bb2c110cd591cad0925621e7a91bcaf1f1de",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/63486177ef429f87fd6f2a43df5fba34337c235f"
        },
        "date": 1727156549609,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.47604314285712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.205640921705424,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.78090380967743,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.33864115686275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.768684396371484,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.902331068117073,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 203.87205795882352,
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
          "id": "3deac78af99940e32edc0514e647df42d748d502",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.1",
          "timestamp": "2024-09-25T10:05:51Z",
          "tree_id": "96f4b5f7dda6053fe2ceb1302bcc5ae8622a8bb1",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3deac78af99940e32edc0514e647df42d748d502"
        },
        "date": 1727259279185,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.17619764565218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.05992852444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 70.14538472653061,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.38884286248063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.440262366212995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 219.72029121817877,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.57173342857143,
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
          "id": "4ca90ebaf89f70cf17997f252f9c80afe56213b5",
          "message": "Update dependency org.jetbrains:annotations to v25",
          "timestamp": "2024-09-25T13:42:36Z",
          "tree_id": "7f46e7a42f84ceced7c84a1be3e58638c4ea312f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4ca90ebaf89f70cf17997f252f9c80afe56213b5"
        },
        "date": 1727272587564,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 75.61605895438598,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.26210967732693,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.615049423201533,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 205.05923647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.55236138888887,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.97207669009009,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.90112757906977,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "smirnov_oleg96@mail.ru",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29a51f269072d4dd6a7f0585687d687053d21330",
          "message": "Comment on alert only if the PR is made from main repo (#250)\n\nAdds condition to add PR comment only if it is made from the main repo.\r\nAlso uses a GitHub token as a fallback in case the secret is not\r\navailable\r\n\r\nResolves #249.\r\n\r\nI made the PR from fork to check how it works",
          "timestamp": "2024-10-03T19:11:20-04:00",
          "tree_id": "8845ec38d7e3badc3d3a75d462f3f0dedaa28cd8",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/29a51f269072d4dd6a7f0585687d687053d21330"
        },
        "date": 1727997653245,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.70849167755101,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.06606607730615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.28208614244486,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 212.46906348832982,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.35208251259843,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.63895342391307,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.33983942857145,
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
          "id": "442f0d8fdb8c70d92a9b18f01ac07d99e1e95f12",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.2",
          "timestamp": "2024-10-04T19:41:57Z",
          "tree_id": "1dbeae7a8d8620cb659ba77adbafea575659312a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/442f0d8fdb8c70d92a9b18f01ac07d99e1e95f12"
        },
        "date": 1728071827539,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.25217094210526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 159.1727234891892,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 149.53267999999997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 68.24478214035088,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.74606100376694,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.396144746651746,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 234.41989419522056,
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
          "id": "4c3064a82ce981caa1e0c4cb440f020f20d3add8",
          "message": "Update dependency org.jetbrains:annotations to v26",
          "timestamp": "2024-10-08T16:01:27Z",
          "tree_id": "d8bebf276e8c24da2e35683af272607a2c5b49df",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4c3064a82ce981caa1e0c4cb440f020f20d3add8"
        },
        "date": 1728404162420,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.52968583333336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.98921257425333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.43230274313529,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.95032472499997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.74732701296297,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 238.71529211739136,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 56.539779257608686,
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
          "id": "aba23669364fbb0c67a362d74f12fe3324628aeb",
          "message": "Update dependency org.jetbrains:annotations to v26.0.1",
          "timestamp": "2024-10-14T20:09:34Z",
          "tree_id": "38448f3f1ddeecfd3c921ae053dd193175cf559e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/aba23669364fbb0c67a362d74f12fe3324628aeb"
        },
        "date": 1728937091736,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 208.7575255227273,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.16781029411766,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.77554680077519,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.617111057026555,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.739421405663034,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 181.46286074759337,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.832825268,
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
          "id": "721fa92ee9602bbb903fac189e3ed0d034fd077a",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v3.0.1",
          "timestamp": "2024-10-17T16:26:41Z",
          "tree_id": "47b8b10cae994955de0cef7d3a59cbfd4d94328d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/721fa92ee9602bbb903fac189e3ed0d034fd077a"
        },
        "date": 1729183013663,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.07953053200001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 154.17832923333336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 150.8014770588235,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.58030864721269,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.923763431106675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 253.5288427730769,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.380263054545445,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f2283cb2fe1ee9a4fe9d428c68f324a51d61818",
          "message": "Update dependency net.thauvin.erik.urlencoder:urlencoder-lib to v1.6.0 (#257)\n\nThis PR contains the following updates:\r\n\r\n| Package | Change | Age | Adoption | Passing | Confidence |\r\n|---|---|---|---|---|---|\r\n|\r\n[net.thauvin.erik.urlencoder:urlencoder-lib](https://redirect.github.com/ethauvin/urlencoder)\r\n| `1.5.0` -> `1.6.0` |\r\n[![age](https://developer.mend.io/api/mc/badges/age/maven/net.thauvin.erik.urlencoder:urlencoder-lib/1.6.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\r\n|\r\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/net.thauvin.erik.urlencoder:urlencoder-lib/1.6.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\r\n|\r\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/net.thauvin.erik.urlencoder:urlencoder-lib/1.5.0/1.6.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\r\n|\r\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/net.thauvin.erik.urlencoder:urlencoder-lib/1.5.0/1.6.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\r\n|\r\n\r\n---\r\n\r\n> [!WARNING]\r\n> Some dependencies could not be looked up. Check the Dependency\r\nDashboard for more information.\r\n\r\n---\r\n\r\n### Release Notes\r\n\r\n<details>\r\n<summary>ethauvin/urlencoder\r\n(net.thauvin.erik.urlencoder:urlencoder-lib)</summary>\r\n\r\n###\r\n[`v1.6.0`](https://redirect.github.com/ethauvin/urlencoder/releases/tag/1.6.0)\r\n\r\n[Compare\r\nSource](https://redirect.github.com/ethauvin/urlencoder/compare/1.5.0...1.6.0)\r\n\r\n##### Summary\r\n\r\n-   Compatibility with Java 8\r\n\r\n##### What's Changed in 1.6.0\r\n\r\n- Compile public version with Java 21 by\r\n[@&#8203;ethauvin](https://redirect.github.com/ethauvin) in\r\n[09b44d5](https://redirect.github.com/ethauvin/urlencoder/commit/09b44d53e89a80e742f2ba30431a3da758bf0b0b)\r\n- Bumped Gradle to version 8.10.2 by\r\n[@&#8203;ethauvin](https://redirect.github.com/ethauvin) in\r\n[3e36e38](https://redirect.github.com/ethauvin/urlencoder/commit/3e36e389fb3e7db74cdbfd562ccdf5c4d390fa32)\r\n- Updated dependencies by\r\n[@&#8203;ethauvin](https://redirect.github.com/ethauvin) in\r\n[d66fdb1](https://redirect.github.com/ethauvin/urlencoder/commit/d66fdb12e69a389af7c6a60f9fedd6f69d7219ab)\r\n    -   Bumped Detekt to version 1.23.7\r\n    -   Bumped Kover to version 0.8.3\r\n    -   Bumped Kotlin to version 1.9.24\r\n- Java 8 compatibility by\r\n[@&#8203;rbraeunlich](https://redirect.github.com/rbraeunlich) in\r\n[#&#8203;19](https://redirect.github.com/ethauvin/urlencoder/pull/19)\r\n\r\n##### New Contributors\r\n\r\n- [@&#8203;rbraeunlich](https://redirect.github.com/rbraeunlich) made\r\ntheir first contribution in\r\n[#&#8203;19](https://redirect.github.com/ethauvin/urlencoder/pull/19)\r\n\r\n**Full Changelog**:\r\nhttps://github.com/ethauvin/urlencoder/compare/1.5.0...1.6.0\r\n\r\n</details>\r\n\r\n---\r\n\r\n### Configuration\r\n\r\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\r\nAutomerge - At any time (no schedule defined).\r\n\r\n🚦 **Automerge**: Enabled.\r\n\r\n♻ **Rebasing**: Whenever PR becomes conflicted, or you tick the\r\nrebase/retry checkbox.\r\n\r\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\r\nagain.\r\n\r\n---\r\n\r\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\r\nthis box\r\n\r\n---\r\n\r\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\r\nView the [repository job\r\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\r\n\r\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOC4xMjAuMSIsInVwZGF0ZWRJblZlciI6IjM4LjEyMC4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\r\n\r\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-19T19:45:33+02:00",
          "tree_id": "b68a7eb51d9afebb6b44a73db0c7f963e772d88d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/7f2283cb2fe1ee9a4fe9d428c68f324a51d61818"
        },
        "date": 1729360522758,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.24324905703124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.619715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.39646519565217,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.537306228183034,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.268271459203927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.23974127334884,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 72.28623646538462,
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
          "id": "238bb0bd2d213987f75db7b3bc42c4da9d8c5a8b",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.3",
          "timestamp": "2024-10-21T17:38:11Z",
          "tree_id": "e7d4f36c64d40eda5befbf716e31e758e1911816",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/238bb0bd2d213987f75db7b3bc42c4da9d8c5a8b"
        },
        "date": 1729533156380,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.929695075595944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.831378435616639,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 181.8283734425438,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.02968357272728,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 190.58840285000002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.52430588235293,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 56.01291730326087,
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
          "id": "238bb0bd2d213987f75db7b3bc42c4da9d8c5a8b",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.3",
          "timestamp": "2024-10-21T17:38:11Z",
          "tree_id": "e7d4f36c64d40eda5befbf716e31e758e1911816",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/238bb0bd2d213987f75db7b3bc42c4da9d8c5a8b"
        },
        "date": 1729676638983,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.5151505368421,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 55.42135569541284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.82422527777777,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.2842056538221,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.97077970952943,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.64194922006655,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 70.1226606607843,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "r.braeunlich@gmail.com",
            "name": "Ronny Bräunlich",
            "username": "rbraeunlich"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b61dcf0cc334d7508615e47568ee11845cf6ccdd",
          "message": "Add Java 8 support (#255)\n\nCloses #202\r\n\r\n---------\r\n\r\nCo-authored-by: Ronny Bräunlich <ronny.braeunlich@cbc.de>\r\nCo-authored-by: Piotr Krzeminski <git@krzeminski.it>\r\nCo-authored-by: Adam <897017+aSemy@users.noreply.github.com>",
          "timestamp": "2024-10-26T16:20:22+02:00",
          "tree_id": "956952f6544fb11ac8934c03a0817b29620b3f3a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b61dcf0cc334d7508615e47568ee11845cf6ccdd"
        },
        "date": 1729952973379,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.09497748478259,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 147.12405657142853,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.750878544881886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.37359843655272,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.269838039254498,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 213.47426464714286,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 72.79207535660377,
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
          "id": "e08c9452b8539b6f6bf5171add22145d27583ad8",
          "message": "Switch JDK distribution to Temurin (#259)\n\nSee\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/255#discussion_r1817840117\r\n\r\nApparently Temurin is one of the most recommended ones.",
          "timestamp": "2024-10-28T07:33:08+01:00",
          "tree_id": "73f1042636e1372e7f4ab13b37c8d256c6f595eb",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e08c9452b8539b6f6bf5171add22145d27583ad8"
        },
        "date": 1730097673345,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.09040976036036,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.60612748859546,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.547104589959844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 173.053363049108,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.82289156153846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 137.19234811621624,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 147.24697794117645,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "41e61466750b84ce1823a4bef71443a394fd2301",
          "message": "Prepare for releasing 3.0.3",
          "timestamp": "2024-10-28T07:50:48+01:00",
          "tree_id": "3662774762aa0fb394fa302f4f721b186659c313",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/41e61466750b84ce1823a4bef71443a394fd2301"
        },
        "date": 1730098687916,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.227362855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.75044950866142,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.96470515356744,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.858779134516112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 178.31617719713586,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.8704291,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "ac2a4f10ef3f2f46f4defaa6e9b41150ddfac223",
          "message": "Prepare for next dev cycle",
          "timestamp": "2024-10-28T08:08:58+01:00",
          "tree_id": "970267946d0ecff48701338cbdde19da5618af7c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ac2a4f10ef3f2f46f4defaa6e9b41150ddfac223"
        },
        "date": 1730099774852,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.6110550588785,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.01225833333334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.3908321326087,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.626040431625473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.26438578824318,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 171.77468654838708,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 85.93956932857142,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "e4dd49589f98b806bfc14338e162d5642a48ac4f",
          "message": "Fix workflow's name",
          "timestamp": "2024-10-28T08:53:48+01:00",
          "tree_id": "2588c4e27c94ab3bcd501afab793e298e1b38211",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e4dd49589f98b806bfc14338e162d5642a48ac4f"
        },
        "date": 1730102689269,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.12901352941176,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.286651914414406,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 141.33788449999997,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.26784090504823,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.081111722724984,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.21172159205176,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.73522840188679,
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
          "id": "69941900aa3d9949c0dbaa2d4f5db85d4756f92b",
          "message": "Document the release process (#263)",
          "timestamp": "2024-10-31T21:24:04+01:00",
          "tree_id": "a95e068bdf4ab1c7029cac952320c3b309ba39aa",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/69941900aa3d9949c0dbaa2d4f5db85d4756f92b"
        },
        "date": 1730406809529,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.25923244508196,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 246.28655715555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.87375305555557,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.591192531599944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.156733978971,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 175.2303318684697,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.97523980961537,
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
          "id": "abe514a18187a0a955733b1407a3907716f769f4",
          "message": "Add self-updating badge with commits to snakeyaml-engine (#262)\n\nPart of #260.\r\n\r\nThanks to this, we'll be able to easily see if there are some changes to\r\nsync from the upstream.",
          "timestamp": "2024-11-08T08:15:36+01:00",
          "tree_id": "66bff12b321f8d7ce7a1386d5f0dc10fef54a3ca",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/abe514a18187a0a955733b1407a3907716f769f4"
        },
        "date": 1731050664976,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 147.17461617647058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.909808455882356,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.08554106676711,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.812058922852597,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 190.41055027464242,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 84.1997530283019,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.74859682558142,
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
          "id": "373d89785793728f889b67bbb1583ffcde4d3089",
          "message": "Link to log diff between repost in \"To upstream\" badge (#264)\n\nPart of #260.\r\n\r\nThanks to this, we can preview what commits need to be synced.",
          "timestamp": "2024-11-08T12:28:21+01:00",
          "tree_id": "306b1a73e73cc093d3210903ecd51309d084e4d7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/373d89785793728f889b67bbb1583ffcde4d3089"
        },
        "date": 1731065795553,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.89553552947368,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.82693352606618,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 12.902830550708114,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 177.17042332937498,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.7120270117647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 148.08678371428567,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 194.49948326666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "fa6032451761e3418723d145d3a79c6bf51f0630",
          "message": "[Port from snakeyaml-engine] Test comment reproducibility.\n\nPorts https://bitbucket.org/snakeyaml/snakeyaml-engine/commits/cf808a16bff0eb531a48debcd04be0aab562c21e\n\nCo-authored-by: dejvokep <davidcubesvkdev@gmail.com>",
          "timestamp": "2024-11-09T19:56:45+01:00",
          "tree_id": "72d6b67aaf0dc44aa1270ec38055ac2e1c429d63",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fa6032451761e3418723d145d3a79c6bf51f0630"
        },
        "date": 1731179093627,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.420678998592297,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.528274434378284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.0653233135135,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.91279243962263,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.10097317142856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.9550467595238,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "3110813+krzema12@users.noreply.github.com",
            "name": "Piotr Krzemiński",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "1264e8014ce9a05469f58bc1b84c4a3887820f52",
          "message": "[Port from snakeyaml-engine] Update setEnvConfig Javadoc in LoadSettingsBuilder\n\n- fix typo (EVN → ENV)\n- fix link to env-substitution docs\n\nCo-authored-by: Adam <897017+aSemy@users.noreply.github.com>",
          "timestamp": "2024-11-11T10:23:16+01:00",
          "tree_id": "799b3f8057ac4f6bb3615be0675383a9c417fc2b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1264e8014ce9a05469f58bc1b84c4a3887820f52"
        },
        "date": 1731317510393,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.266985779338846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.58857105388851,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.138427512022162,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 188.2364487994129,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.40829315555557,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.64674837560976,
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
          "id": "6c52b610382094f75c4d639d1d2f3fa40c68a4a1",
          "message": "Convert EmitterWithCommentEnabledTest to Kotlin (#268)\n\nPart of #269.\r\n\r\nThe first commit is the output from Java-to-Kotlin converter, along with\r\nnecessary fixes to make the tests pass.\r\nThe second commit cleans the file up a bit and brings Kotlin-specific\r\nstyle.\r\nThese can be squashed upon merging.",
          "timestamp": "2024-11-12T22:11:16+01:00",
          "tree_id": "066b5a67a6d2847d47f108e41228865b53ad06e5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6c52b610382094f75c4d639d1d2f3fa40c68a4a1"
        },
        "date": 1731446487517,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 213.41034296190475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.64118675151243,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.01440779408816,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 168.63669427042873,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.93517292549019,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.83114938347826,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.19314,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf366bfb3c3fcfda4e8357cc0e83b37349494ab8",
          "message": "Update plugin org.jetbrains.kotlinx.benchmark to v0.4.13 (#275)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| org.jetbrains.kotlinx.benchmark | `0.4.12` -> `0.4.13` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx.benchmark:org.jetbrains.kotlinx.benchmark.gradle.plugin/0.4.13?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx.benchmark:org.jetbrains.kotlinx.benchmark.gradle.plugin/0.4.13?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx.benchmark:org.jetbrains.kotlinx.benchmark.gradle.plugin/0.4.12/0.4.13?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx.benchmark:org.jetbrains.kotlinx.benchmark.gradle.plugin/0.4.12/0.4.13?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xOS4wIiwidXBkYXRlZEluVmVyIjoiMzkuMTkuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-21T14:45:25Z",
          "tree_id": "53c8ece6f03b6a64204b328be479a347fbf9a587",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/bf366bfb3c3fcfda4e8357cc0e83b37349494ab8"
        },
        "date": 1732200983760,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.20293495340674,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.57024119389464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.47247891700582,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.54358491320755,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 58.20790548105263,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 197.4272825409091,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 149.78173235294116,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3843b9f68a3deb2bcd6554a75a1355bba74f3f01",
          "message": "Update dependency io.github.java-diff-utils:java-diff-utils to v4.15 (#276)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.java-diff-utils:java-diff-utils](https://redirect.github.com/java-diff-utils/java-diff-utils)\n| `4.12` -> `4.15` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.java-diff-utils:java-diff-utils/4.15?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.java-diff-utils:java-diff-utils/4.15?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.java-diff-utils:java-diff-utils/4.12/4.15?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.java-diff-utils:java-diff-utils/4.12/4.15?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xOS4wIiwidXBkYXRlZEluVmVyIjoiMzkuMTkuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-24T01:50:36Z",
          "tree_id": "07e529dbbbfafce462d1231a834e1a3f53ec2617",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3843b9f68a3deb2bcd6554a75a1355bba74f3f01"
        },
        "date": 1732413583863,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 150.83020382352942,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.19679949444443,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.99602115148264,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.464954543901133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.79221094816467,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.746034846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.33595143203125,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f27c2a1f4c0b5fbb2416a1f296f9def9e920799",
          "message": "Update plugin org.gradle.toolchains.foojay-resolver-convention to v0.9.0 (#277)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| org.gradle.toolchains.foojay-resolver-convention | `0.8.0` -> `0.9.0`\n|\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.8.0/0.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.8.0/0.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS40Mi40IiwidXBkYXRlZEluVmVyIjoiMzkuNDIuNCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-02T11:54:24Z",
          "tree_id": "36c646e603b48c15b98b429b54bbf98a5de56869",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2f27c2a1f4c0b5fbb2416a1f296f9def9e920799"
        },
        "date": 1733141078188,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.39226517317073,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.93128852941177,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.05063935630252,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.727415702373406,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.30396895294451,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 195.99925556303032,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 74.100188875,
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
          "id": "06317b4c7f2743318c44f09b1bf03bc4b5405680",
          "message": "ci: change how upstream project is tracked (#295)\n\nBefore this change, we simply stored a hash of the latest commit in\r\nsnakeyaml-engine that we ported over to snakeyaml-engine-kmp. The idea\r\nwas to port the changes one after another, assuming it would be easy.\r\nHowever, given our latest problems to port one of the commits\r\n(https://github.com/krzema12/snakeyaml-engine-kmp/pull/272) so that it\r\nworks on all targets, it's not good to block on this single change with\r\nporting other changes.\r\n\r\nOne idea would be to note with better granularity which commits have\r\nbeen ported. However, it would cost us quite a bit to add this\r\nmechanism, instead of focusing on actually porting the changes.\r\n\r\nThat's why I propose changing the semantics of the counter displayed in\r\nthe README: show how many changes weren't analyzed by us. In other\r\nwords, as soon as we acknowledge a given upstream change by creating a\r\nproper issue in our project, we can assume this change is \"analyzed\".\r\nThen, in our own pace, we can take care of porting the changes, possibly\r\ndoing it in parallel. Thanks to this approach, changes that are harder\r\nto port will naturally be ported later, and won't block porting easy\r\nchanges, which is good for the users of the lib.\r\n\r\nI've created these issues under a new label to track the changes to\r\nport:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/issues?q=is%3Aissue+is%3Aopen+label%3A%22port+from+snakeyaml-engine%22\r\n\r\nYou can cross-reference it with\r\nhttps://raw.githubusercontent.com/krzema12/snakeyaml-engine-kmp/refs/heads/commits-to-upstream-badge/log-diff-between-repos.txt",
          "timestamp": "2024-12-15T13:01:37+01:00",
          "tree_id": "6a11349896f038b82402fc0be82946534178ba0d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/06317b4c7f2743318c44f09b1bf03bc4b5405680"
        },
        "date": 1734264720987,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.9055422652174,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.972129504673585,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.056360239072273,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 176.46337572319325,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.50042481296296,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 158.57226484848485,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.51964458661417,
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
          "id": "f38a9ef699f619bd95718d2ab0bf1fe54b714fd5",
          "message": "docs: describe the badge in README (#296)\n\nSo that it's clear what this number means.",
          "timestamp": "2024-12-15T17:01:58+01:00",
          "tree_id": "767a2b46b7fe03bb64d04af94c9ae1599b959e3a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f38a9ef699f619bd95718d2ab0bf1fe54b714fd5"
        },
        "date": 1734279093829,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.36995409285711,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.3562084446737,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.411986992042335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 175.17383157345483,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.17477326538462,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.92548371428575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.91101160634921,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8160db9e364357c9de413f85622ca885516180c",
          "message": "docs: remove irrelevant JavaDoc (#243)\n\nStrings are never UTF-8 encoded.\r\nStrings are a sequence of Unicode characters.\r\nIf these Unicode characters are encoded into a sequence of bytes\r\nor decoded from a sequence of bytes, then encodings like UTF-8 come into\r\nplay.\r\n\r\nSame for BOM, they are just not relevant when we talk about Strings or\r\nReaders,\r\nthey are only relevant if starting a stream of bytes, otherwise they are\r\njust content.\r\n\r\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2024-12-15T19:29:43+01:00",
          "tree_id": "7fac5eb86da4d4724f2195d0e7d1ef99f61e29b7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d8160db9e364357c9de413f85622ca885516180c"
        },
        "date": 1734288108857,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 110.98449933409093,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.46737262721052,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.042466890638574,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 186.0725751894397,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.55877563392859,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.90023294117648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.84213656637931,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e9ea240a4598ee94229a7127414ef0f5bf0cbb4",
          "message": "test: migrate tests for representer package to common sources (#278)\n\nThis PR migrates tests for the `representer` package to common sources.\r\nThis should provide some coverage for `identityHashCode` function that\r\ndoes not work correctly on all platforms.\r\n\r\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269 and\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/issues/279.",
          "timestamp": "2024-12-16T13:25:28Z",
          "tree_id": "c1542a0e28df103d38e0638eeaeb3fad80bad3de",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9e9ea240a4598ee94229a7127414ef0f5bf0cbb4"
        },
        "date": 1734356432230,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.53683774333333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.51655819777646,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.392131250696789,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 185.53521729666667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 77.28376801176469,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 152.42552999999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 139.39580230857143,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f8e659cb056816071e247f5d7f041baa795cd2e",
          "message": "Update dependency org.junit.jupiter:junit-jupiter-engine to v5.11.4 (#300)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.11.3` ->\n`5.11.4` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.11.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.11.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.11.3/5.11.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.11.3/5.11.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS42OS4zIiwidXBkYXRlZEluVmVyIjoiMzkuNjkuMyIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-16T13:49:30Z",
          "tree_id": "9af3b9a48a052d4de570388a5d185096e82ff839",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0f8e659cb056816071e247f5d7f041baa795cd2e"
        },
        "date": 1734357437208,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.503526296897775,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.173960272390733,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 172.54162725980606,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.05707737818183,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.07259885714288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.24432403736263,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 180.58262246206897,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f08ac06f4e485de3d66e7c2c844d7bf13807235",
          "message": "Update dependency gradle to v8.11.1 (#270)\n\nThis PR contains the following updates:\r\n\r\n| Package | Update | Change |\r\n|---|---|---|\r\n| [gradle](https://gradle.org)\r\n([source](https://redirect.github.com/gradle/gradle)) | minor | `8.10.2`\r\n-> `8.11.1` |\r\n\r\n---\r\n\r\n> [!WARNING]\r\n> Some dependencies could not be looked up. Check the Dependency\r\nDashboard for more information.\r\n\r\n---\r\n\r\n### Release Notes\r\n\r\n<details>\r\n<summary>gradle/gradle (gradle)</summary>\r\n\r\n###\r\n[`v8.11.1`](https://redirect.github.com/gradle/gradle/releases/tag/v8.11.1):\r\n8.11.1\r\n\r\n[Compare\r\nSource](https://redirect.github.com/gradle/gradle/compare/v8.11.0...v8.11.1)\r\n\r\nThis is a patch release for Gradle 8.11. We recommend users upgrade to\r\n8.11.1 instead of 8.11.\r\n\r\nIt fixes the following issues:\r\n\r\n-\r\n[#&#8203;31268](https://redirect.github.com/gradle/gradle/issues/31268)\r\nBuildEventsListenerRegistry corrupted with Isolated Projects and\r\nparallel configuration\r\n-\r\n[#&#8203;31282](https://redirect.github.com/gradle/gradle/issues/31282)\r\nRunning executables sporadically fails with ETXTBSY (Text file busy)\r\n-\r\n[#&#8203;31284](https://redirect.github.com/gradle/gradle/issues/31284)\r\nArrayIndexOutOfBoundsException after upgrading to gradle 8.11 when\r\ngenerating problems report\r\n-\r\n[#&#8203;31310](https://redirect.github.com/gradle/gradle/issues/31310)\r\nUnable to run Gradle task in 8.10 due to bytecode interception\r\n\r\n[Read the Release\r\nNotes](https://docs.gradle.org/8.11.1/release-notes.html)\r\n\r\n#### Upgrade instructions\r\n\r\nSwitch your build to use Gradle 8.11.1 by updating your wrapper:\r\n\r\n    ./gradlew wrapper --gradle-version=8.11.1\r\n\r\nSee the Gradle [8.x upgrade\r\nguide](https://docs.gradle.org/8.11.1/userguide/upgrading_version\\_8.html)\r\nto learn about deprecations, breaking changes and other considerations\r\nwhen upgrading.\r\n\r\nFor Java, Groovy, Kotlin and Android compatibility, see the [full\r\ncompatibility\r\nnotes](https://docs.gradle.org/8.11.1/userguide/compatibility.html).\r\n\r\n#### Reporting problems\r\n\r\nIf you find a problem with this release, please file a bug on [GitHub\r\nIssues](https://redirect.github.com/gradle/gradle/issues) adhering to\r\nour issue guidelines.\r\nIf you're not sure you're encountering a bug, please use the\r\n[forum](https://discuss.gradle.org/c/help-discuss).\r\n\r\nWe hope you will build happiness with Gradle, and we look forward to\r\nyour feedback via [Twitter](https://twitter.com/gradle) or on\r\n[GitHub](https://redirect.github.com/gradle).\r\n\r\n###\r\n[`v8.11`](https://redirect.github.com/gradle/gradle/releases/tag/v8.11.0):\r\n8.11\r\n\r\n[Compare\r\nSource](https://redirect.github.com/gradle/gradle/compare/v8.10.2...v8.11.0)\r\n\r\nThe Gradle team is excited to announce Gradle 8.11.\r\n\r\n[Read the Release\r\nNotes](https://docs.gradle.org/8.11/release-notes.html)\r\n\r\nWe would like to thank the following community members for their\r\ncontributions to this release of Gradle:\r\n[Adam](https://redirect.github.com/adam-enko),\r\n[alyssoncs](https://redirect.github.com/alyssoncs),\r\n[Bilel MEDIMEGH](https://redirect.github.com/LelouBil),\r\n[Björn Kautler](https://redirect.github.com/Vampire),\r\n[Chuck Thomas](https://redirect.github.com/chuckthemole),\r\n[Daniel Lacasse](https://redirect.github.com/lacasseio),\r\n[Finn Petersen](https://redirect.github.com/fp7),\r\n[JK](https://redirect.github.com/jknair0),\r\n[Jérémie Bresson](https://redirect.github.com/jmini),\r\n[luozexuan](https://redirect.github.com/luozexuan),\r\n[Mahdi Hosseinzadeh](https://redirect.github.com/mahozad),\r\n[Markus Gaisbauer](https://redirect.github.com/quijote),\r\n[Matthew Haughton](https://redirect.github.com/3flex),\r\n[Matthew Von-Maszewski](https://redirect.github.com/matthewvon),\r\n[ploober](https://redirect.github.com/ploober),\r\n[Siarhei](https://redirect.github.com/madhead),\r\n[Titus James](https://redirect.github.com/tj330),\r\n[vrp0211](https://redirect.github.com/vrp0211)\r\n\r\n#### Upgrade instructions\r\n\r\nSwitch your build to use Gradle 8.11 by updating your wrapper:\r\n\r\n    ./gradlew wrapper --gradle-version=8.11\r\n\r\nSee the Gradle [8.x upgrade\r\nguide](https://docs.gradle.org/8.11/userguide/upgrading_version\\_8.html)\r\nto learn about deprecations, breaking changes and other considerations\r\nwhen upgrading.\r\n\r\nFor Java, Groovy, Kotlin and Android compatibility, see the [full\r\ncompatibility\r\nnotes](https://docs.gradle.org/8.11/userguide/compatibility.html).\r\n\r\n#### Reporting problems\r\n\r\nIf you find a problem with this release, please file a bug on [GitHub\r\nIssues](https://redirect.github.com/gradle/gradle/issues) adhering to\r\nour issue guidelines.\r\nIf you're not sure you're encountering a bug, please use the\r\n[forum](https://discuss.gradle.org/c/help-discuss).\r\n\r\nWe hope you will build happiness with Gradle, and we look forward to\r\nyour feedback via [Twitter](https://twitter.com/gradle) or on\r\n[GitHub](https://redirect.github.com/gradle).\r\n\r\n</details>\r\n\r\n---\r\n\r\n### Configuration\r\n\r\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\r\nAutomerge - At any time (no schedule defined).\r\n\r\n🚦 **Automerge**: Enabled.\r\n\r\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\r\nrebase/retry checkbox.\r\n\r\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\r\nagain.\r\n\r\n---\r\n\r\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\r\nthis box\r\n\r\n---\r\n\r\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\r\nView the [repository job\r\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\r\n\r\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS45LjUiLCJ1cGRhdGVkSW5WZXIiOiIzOS41OC4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\r\n\r\n---------\r\n\r\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\r\nCo-authored-by: Piotr Krzeminski <git@krzeminski.it>",
          "timestamp": "2024-12-16T22:40:24Z",
          "tree_id": "ba5a4630a986c35caff705ad7b67944554e071b9",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6f08ac06f4e485de3d66e7c2c844d7bf13807235"
        },
        "date": 1734389625364,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.2672021804772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.462732977561155,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.76608317160998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 77.61279402,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 150.5221988235294,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.829364093495926,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.54732760000002,
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
          "id": "1c5d14733a61786577593de8a508b32c76719d21",
          "message": "[Port from snakeyaml-engine] Try to keep the anchor name when available (#301)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/286\r\n\r\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/4ed7a0affa7fd0626ddf2a2b4c66f09b5ea5c52f",
          "timestamp": "2024-12-17T11:12:06+03:00",
          "tree_id": "4dfc44d852b649c5d24d294160eb5f8cea1fd063",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1c5d14733a61786577593de8a508b32c76719d21"
        },
        "date": 1734423703625,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 116.19476117045454,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.40535389682928,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.960164999439666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 199.97920550565303,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 75.09785275818182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.1960566,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 152.81863454545456,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f22ebf97ea8b52ab5bed23d30efa2f72663eae",
          "message": "Update dependency com.google.guava:guava to v33.4.0-jre (#303)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.google.guava:guava](https://redirect.github.com/google/guava) |\n`33.3.1-jre` -> `33.4.0-jre` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.google.guava:guava/33.4.0-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.google.guava:guava/33.4.0-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.google.guava:guava/33.3.1-jre/33.4.0-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.google.guava:guava/33.3.1-jre/33.4.0-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS42OS4zIiwidXBkYXRlZEluVmVyIjoiMzkuNjkuMyIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-17T08:28:03Z",
          "tree_id": "f865ad7a5852f0d45dfcfc878dd18cf5466635d6",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e3f22ebf97ea8b52ab5bed23d30efa2f72663eae"
        },
        "date": 1734424493807,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 149.88184143783783,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.7488318336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.12811773332939,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 12.83350072617514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.35586243136726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.243710575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.61666057142855,
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
          "id": "29a3ffd6148299f1a565103d725d27892857ee66",
          "message": "refactor: convert CanonicalScanner to Kotlin (#305)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/290\r\n\r\nIt's needed so that all consumers of `Scanner` are in Kotlin, otherwise\r\nthere are issues with Java's default implementation of an interface\r\nmethod, see\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/302#discussion_r1888084236",
          "timestamp": "2024-12-17T16:02:17Z",
          "tree_id": "f653f56cd2bb54d53991a08ded3562f53eaa6265",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/29a3ffd6148299f1a565103d725d27892857ee66"
        },
        "date": 1734451880023,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 153.7731691176471,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 236.17786934583333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.30805014937128,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.790143051029625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 170.07319733020833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.63106651399998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.536378581818184,
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
          "id": "35053c60dc637a8eb33b454f538bc543c3937af2",
          "message": "[Port from snakeyaml-engine] Scanner#checkToken(Token.ID) avoids varargs (#302)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/290\r\n\r\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/b26779e3887d8d6b89e7e3c375bc497e3c8c5be9",
          "timestamp": "2024-12-17T16:19:48Z",
          "tree_id": "032012c4d5c0d306e08c2aadab32754befdfe6ff",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/35053c60dc637a8eb33b454f538bc543c3937af2"
        },
        "date": 1734453175951,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.640010189618597,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.09064226562586,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 172.76805925555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.34999533207547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 239.64687767826086,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 157.14221424242425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.93679755,
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
          "id": "4d462e860e0086c4998bf3ca5490f361ec1121d7",
          "message": "[Port from snakeyaml-engine] ScannerImpl scanFlow* append to existing StringBuilder (#306)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/291\r\n\r\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/cb2e934a207723dc0f22b37fbfcc953c21a8b240",
          "timestamp": "2024-12-18T09:09:03+04:00",
          "tree_id": "a9ae7c300a1e7808a5cf20d1a35f16a97d01620e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4d462e860e0086c4998bf3ca5490f361ec1121d7"
        },
        "date": 1734499032634,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 155.15551696969698,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.33973467555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.233767900000004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.5675716160913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.707298376770032,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 172.7042716912941,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.49073355636364,
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
          "id": "f308ea38026d9098e7ee037c1338ca25cc4ef7ab",
          "message": "ci: publish snapshot releases to Sonatype snapshots repo (#308)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/304\r\n\r\nGitHub branch-based snapshots publishing was something we started with\r\nbecause it seemed to be easier to configure. Now that we have a proper\r\nworkflow for publishing proper releases, it can be easily reused for\r\npublishing snapshot releases.\r\n\r\nTested here:\r\n*\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/12381982894/job/34561992660\r\n* https://oss.sonatype.org/content/repositories/snapshots/it/krzeminski/",
          "timestamp": "2024-12-18T21:46:48+04:00",
          "tree_id": "f678449fd3edc5e6c60d8e52cf3a636c5025af19",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f308ea38026d9098e7ee037c1338ca25cc4ef7ab"
        },
        "date": 1734544457326,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 150.42108514285715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.70359449743592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.163253796078436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.189454537578023,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.467436949101344,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 169.5007393369697,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.61621721538464,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a64b57bb4e09a2d88f3c4501c45cc04d1cbef389",
          "message": "Update plugin org.jetbrains.kotlinx.binary-compatibility-validator to v0.17.0 (#310)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx.binary-compatibility-validator](https://redirect.github.com/Kotlin/binary-compatibility-validator)\n| `0.16.3` -> `0.17.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.17.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.17.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.16.3/0.17.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.16.3/0.17.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/binary-compatibility-validator\n(org.jetbrains.kotlinx.binary-compatibility-validator)</summary>\n\n###\n[`v0.17.0`](https://redirect.github.com/Kotlin/binary-compatibility-validator/releases/tag/0.17.0)\n\n[Compare\nSource](https://redirect.github.com/Kotlin/binary-compatibility-validator/compare/0.16.3...0.17.0)\n\n#### What's Changed\n\n- `$suspendImpl` functions are now filtered from dumps\n([#&#8203;271](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/271))\nThis change may cause validation failures for projects where dumps\nalready contain such functions. It is recommended to regenerate dumps\n(`apiDump` task) after updating the BCV to `0.17.0`.\n- Supported class files generated for JVM target 23\n([#&#8203;284](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/284))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS43Mi41IiwidXBkYXRlZEluVmVyIjoiMzkuNzIuNSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-19T20:12:54Z",
          "tree_id": "0478e042eed9f8bd25e6636aa0de72eb5e41fc13",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/a64b57bb4e09a2d88f3c4501c45cc04d1cbef389"
        },
        "date": 1734639621437,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.96349892104207,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.084476868620134,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 169.18444866122258,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.94689674909091,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 155.11484666666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.99603720859376,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.7790249317073,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c59a67d3dc4c9428f09a689116d343c41c5634e1",
          "message": "Update dependency gradle to v8.12 (#311)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | minor | `8.11.1`\n-> `8.12` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.12`](https://redirect.github.com/gradle/gradle/compare/v8.11.1...v8.12.0)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.11.1...v8.12.0)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS43Mi41IiwidXBkYXRlZEluVmVyIjoiMzkuNzIuNSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-20T20:14:43Z",
          "tree_id": "f427c8626818590ddf8f991e0b56b813d2741754",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c59a67d3dc4c9428f09a689116d343c41c5634e1"
        },
        "date": 1734726389875,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 147.13308814473686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.0686667153758,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.87370115973123,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 171.20096889671714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.90611951964284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 153.76297823529416,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.3524131474138,
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
          "id": "60a4593934183f4a7306d648ef8cf94098390c6b",
          "message": "Fix identityHashCode for JS and WasmJS (#273)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/279\r\n\r\n---------\r\n\r\nCo-authored-by: Oleg Smirnov <oleg31101996@gmail.com>",
          "timestamp": "2024-12-28T17:02:59+01:00",
          "tree_id": "4c38f83417210a3c245fdc3293346bb18aabe189",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/60a4593934183f4a7306d648ef8cf94098390c6b"
        },
        "date": 1735402377309,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.049183558941863,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.098194364175264,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.814715917655244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 106.1476527898624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 189.9993564034483,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.95072986494127,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 75.35890114210525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.5798749780407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.94019836363637,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.88274276504361,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.458659073387096,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 86.39123866188851,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 156.40876818181817,
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
          "id": "53e5c77393d501bbb835264a3f55385ccec91cda",
          "message": "[Port from snakeyaml-engine] Allow to avoid dumping anchors (#272)\n\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/1af7dcd2c9c64a9d7cd9de3cd5f64bb2fc2aab6a\r\n\r\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/280",
          "timestamp": "2024-12-28T21:50:03+01:00",
          "tree_id": "56535924dfa2ce0725ec8bc8bdd2c8cae7eb5a3a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/53e5c77393d501bbb835264a3f55385ccec91cda"
        },
        "date": 1735419538252,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.0335088433061,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.2809091818457,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.02964902503635,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 119.86474106763293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 184.89767075675678,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.01516468989472,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.9498592918919,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.563787095338256,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.04155142357723,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 73.4145842964074,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.26910429333334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 88.14312450324108,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 154.93457878787882,
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
          "id": "908f98434610a4fa54dffde73cecb9c09f288f65",
          "message": "[Port from snakeyaml-engine] Dump as JSON (#313)\n\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/5df68d14ee12742f882acc716de3cc04e90c4fe5\r\n\r\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/285",
          "timestamp": "2024-12-30T13:53:43+01:00",
          "tree_id": "47ded6dc26b48a14a6064c37656383ea7c0ac9be",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/908f98434610a4fa54dffde73cecb9c09f288f65"
        },
        "date": 1735563889339,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 116.12010391204686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 163.3748342846154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 93.67793380438825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 161.02391875000004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.051562712589632,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.9483948114035,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.717740304422826,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.41468119318355,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.869362181067114,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 119.59409168450898,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 191.857325,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.29504816014204,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.33192865714287,
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
          "id": "4b150bad74ca5a718343bb9ab05c23fa2a6271ea",
          "message": "Allow accessing test resources from common source set (#312)\n\nIt's a really minimal version of a little two-part util to access test\r\nresources from tests in `commonTest` source set, via putting them into a\r\nKotlin file that is later compiled and attached to the test bundle.\r\nThanks to this, we can port new changes in snakeyaml-engine and port\r\nJVM-specific tests to the common source set without putting the YAML\r\nfiles as multiline strings in the test Kotlin files.\r\n\r\nThere's https://github.com/goncalossilva/kotlinx-resources but it\r\ndoesn't support Wasm\r\n(https://github.com/goncalossilva/kotlinx-resources/issues/91).\r\n\r\nWe use a similar approach already for YAML test suite, here:\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/blob/53e5c77393d501bbb835264a3f55385ccec91cda/buildSrc/src/main/kotlin/buildsrc/tasks/GenerateYamlTestSuiteData.kt.\r\nIn the future, we could probably use a single mechanism to access a\r\ncertain group of files from the common source set's tests.\r\n\r\nOther remarks:\r\n* I think there are more stringified resources in the code base - once\r\nthis PR is merged, I'm going to put them back in YAML files\r\n* if the resource doesn't exist, it fails with an NPE somewhere in the\r\nmiddle - I'm going to tackle it one day, it's not obvious because of\r\n`fold`\r\n* performance-wise (lots of files/large files), I haven't tested it yet.\r\nIt's supposed to work for a small scale we have now\r\n* if it grows and matures, I'm planning to extract it to a separate\r\nlibrary or perhaps contribute to\r\nhttps://github.com/goncalossilva/kotlinx-resources",
          "timestamp": "2024-12-30T15:09:12+01:00",
          "tree_id": "d8202bbb5149362572d6e9ef0881ce83c31de60a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4b150bad74ca5a718343bb9ab05c23fa2a6271ea"
        },
        "date": 1735568702155,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 90.46221224400395,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.385074894516688,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.69975475269535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.515709651742267,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 124.75621745560379,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 189.69624093230772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.5968362142782,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.83430489166666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 91.02469718919886,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.29128166590911,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.360823791541126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.0032992515625,
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
          "id": "6bdb3c5036f521f92f438bdfc9ad89d804ea245f",
          "message": "[Port from snakeyaml-engine] Fix issue 53 (#316)\n\nPorts both changes at once since after porting just one, the project\r\ndoesn't compile or the tests don't pass:\r\n*\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/a6e00555a812b1a1a4b219f30c9b0882246f2d01\r\n*\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/e998478fd24fa9374b938482f482396232f71ede\r\n\r\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/288",
          "timestamp": "2024-12-31T09:13:03+01:00",
          "tree_id": "0fb8547e191a8e927e8c31c254752152c7c064c7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6bdb3c5036f521f92f438bdfc9ad89d804ea245f"
        },
        "date": 1735633411240,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 89.99874705808375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 157.592729375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.202041893988362,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.055721934710746,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.98749873696914,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.471261983284318,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.898590558828099,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 134.39442245372635,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 190.8371524172078,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 60.68830848998082,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 84.65281526666666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 85.52608293385376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.67058208409091,
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
          "id": "509b5117a0abcf92d96f8fedde673615dcf6d21a",
          "message": "[Port from snakeyaml-engine] Issue 54: Insert a trailing space when alias is a simple key (#309)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/294\r\n\r\nPorts:\r\n*\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/1e74afe280795e6480ec72e7efee5afed44f2e25\r\n*\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/089376b4d2bbd7a0ee66808b7c1be8acc99feb04",
          "timestamp": "2024-12-31T09:26:11Z",
          "tree_id": "71b82a9b8f9165a1e1daac771276aadccac21323",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/509b5117a0abcf92d96f8fedde673615dcf6d21a"
        },
        "date": 1735637871086,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 17.819707748360216,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.889113713102518,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.941945750768317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 122.72117822581095,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 181.41176267122844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.69873442624547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.74448706760565,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 89.01613249425063,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.97714121212124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 78.501551718006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.56206080000001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.054371013410677,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.568639774999994,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2183ede140ec8ad403e6572d1bf6d823d0ba47c",
          "message": "Update dependency io.github.typesafegithub:github-workflows-kt to v3.0.2 (#319)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.0.1` -> `3.0.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.typesafegithub:github-workflows-kt/3.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.typesafegithub:github-workflows-kt/3.0.1/3.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.0.1/3.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.0.2`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.0.2):\n3.0.2\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.0.1...v3.0.2)\n\n#### :star: Features\n\nNone.\n\n#### :hammer_and_wrench: Fixes\n\nNone.\n\n#### :bomb: Breaking changes\n\nNone.\n\n#### :package: Dependencies\n\n- [update Kotlin to\nv2.1.0](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/c11eb9c7e5eee2af8e1a99d0486763bb59efbf09)\n- [update it.krzeminski:snakeyaml-engine-kmp to\nv3.0.3](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/94ae937d25f233052ba9fe204df9bd0b5d422320)\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.0.1...v3.0.2\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS44NS4wIiwidXBkYXRlZEluVmVyIjoiMzkuODUuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-02T01:01:20Z",
          "tree_id": "9603ab3e6f637b45906e35a32c8ae9c5b993cc87",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d2183ede140ec8ad403e6572d1bf6d823d0ba47c"
        },
        "date": 1735780184054,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.910132380705804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 29.839795961876312,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.46613961353467,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 114.94993256888104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 182.38310036981983,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 56.07937000431927,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.03387659999999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.421418102621686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.57010427946428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 86.72052684210527,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 152.08174529411764,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.77537508207266,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.3852014238095,
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
          "id": "df708f05e45d6335375825fde6b7f7ccb53ed026",
          "message": "Temporarily disable Wasm tests (#321)\n\nIt's related to\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/231.\r\n\r\nThe test fail on Kotlin 2.1.0 and/or Kotest 6.0, and we don't know why\r\nyet. Given that Wasm is still experimental and unstable, we want to\r\nrelease the library for other targets. That's why I recommend disabling\r\nthe tests, and tracking the issue in\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/issues/320. Once the\r\ntests are skipped, we'll be able to unblock merging\r\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/231 (I tested this\r\nchange with the mentioned PR and CI is green).\r\n\r\nThis change is made in a separate PR for visibility.",
          "timestamp": "2025-01-02T10:11:30+01:00",
          "tree_id": "1241ba299347cb97984c455d085d4034e6ec404a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/df708f05e45d6335375825fde6b7f7ccb53ed026"
        },
        "date": 1735809964226,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 89.00659024312276,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 153.47137151515153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.822732519945923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.805251625203255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.939070727981534,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.24697204338828,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 13.672360383452093,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 118.69967992117392,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 186.5563762242673,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.065442744342704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.00337513783784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 87.9993993749234,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 143.33841374,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cc23fbf80737e9bd6e25af8cb24bd90882225ca",
          "message": "Migrate renovate config (#322)\n\nThe Renovate config in this repository needs migrating. Typically this\r\nis because one or more configuration options you are using have been\r\nrenamed.\r\n\r\nYou don't need to merge this PR right away, because Renovate will\r\ncontinue to migrate these fields internally each time it runs. But later\r\nsome of these fields may be fully deprecated and the migrations removed.\r\nSo it's a good idea to merge this migration PR soon.\r\n\r\n\r\n\r\n#### [PLEASE\r\nNOTE](https://docs.renovatebot.com/configuration-options#configmigration):\r\nJSON5 config file migrated! All comments & trailing commas were removed.\r\n\r\n🔕 **Ignore**: Close this PR and you won't be reminded about config\r\nmigration again, but one day your current config may no longer be valid.\r\n\r\n❓ Got questions? Does something look wrong to you? Please don't hesitate\r\nto [request help\r\nhere](https://redirect.github.com/renovatebot/renovate/discussions).\r\n\r\n\r\n---\r\n\r\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\r\nView the [repository job\r\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\r\n\r\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-02T10:42:32+01:00",
          "tree_id": "a039b837fa99112db5b877a2e2257c3ae22fca08",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9cc23fbf80737e9bd6e25af8cb24bd90882225ca"
        },
        "date": 1735811900901,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.266223143426636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.36675285714287,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.022001325309986,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 106.23804455106384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.313019918832534,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.23820989611828,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.448505404027767,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.92187217253118,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 174.7060408550403,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.92325419971508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 69.48757110704226,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.921184629848437,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.036882669026554,
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
          "id": "2f3d2d1f942ba667a5692e299ac58fcc7d29f3c4",
          "message": "[Port from snakeyaml-engine] Allow HighSurrogate to be the last char in the data window (#314)\n\nPorts\r\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/c36e42f972c53d851a91e2a2c6323a4c066da662\r\n\r\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/292",
          "timestamp": "2025-01-02T20:18:58Z",
          "tree_id": "186a9b5c7f693702cd7dded62cc113397fb2f03f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2f3d2d1f942ba667a5692e299ac58fcc7d29f3c4"
        },
        "date": 1735850043502,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.540347424088356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.98498663725498,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.747207277110924,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.90821374220008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 191.13444006737274,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 45.84915106919123,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.15707624444444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.020733806051126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.35662048780486,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.856290463432494,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 182.33472976857144,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.74102155546284,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.52807726016949,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "8efb923b255f86ecbd3c163c1ec574958944c76b",
          "message": "Prepare for releasing version 3.1.0",
          "timestamp": "2025-01-03T06:22:47+01:00",
          "tree_id": "a498c4f5c66d242c041f6cf1356f1bef9b08fcf9",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8efb923b255f86ecbd3c163c1ec574958944c76b"
        },
        "date": 1735882605456,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.05103408708102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.4859781361702,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.48970374155594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.58149875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.676480442720454,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.66840464605004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.754538467913193,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 136.55658259564854,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 187.11560573831665,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.562949661912356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 66.24046180945946,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.771857091873436,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.38012448859649,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "ab2ceda47cc9c0212aa75e26f2bd80fecede6504",
          "message": "Prepare for next dev cycle",
          "timestamp": "2025-01-03T06:41:38+01:00",
          "tree_id": "7ad073f68d409c36f89176b82483c0e8dabbb16d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ab2ceda47cc9c0212aa75e26f2bd80fecede6504"
        },
        "date": 1735883684982,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.225012342058314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.722877108227884,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.64034232666668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.97804898826997,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.730026537837844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.18302622048478,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.2938710362495,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.225965672769187,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 134.28191057246497,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 175.10374189022485,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.31845242031354,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.03902309866666,
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
          "id": "0bd862ca770d8e41d211c803cc907a3b92c9b141",
          "message": "Fix caching for generating test resources accessor (#328)\n\nThanks to this fix, the accessor class is regenerated if the resources\ndir's content changes.\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/327.",
          "timestamp": "2025-01-03T14:51:58+04:00",
          "tree_id": "6ccd2d6f31080bf851531e014ecb7ec3a9d5d05a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0bd862ca770d8e41d211c803cc907a3b92c9b141"
        },
        "date": 1735903566156,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.2857136993401,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 66.65045587945205,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.69018478870366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.52692000000002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.21987908940409,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.69345344842672,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.14013678701694,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.0247387325771,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 196.2445964988678,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 44.06942547102758,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.26530886527777,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.79885085174779,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 116.36247500952382,
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
          "id": "65b72bd2713dddace6613129a81ccddce325b92f",
          "message": "Commonize DumpAnchorTest (#326)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-03T15:29:53+04:00",
          "tree_id": "d5fafa329119acdfd7d29b0bdb95887fa7e8692c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/65b72bd2713dddace6613129a81ccddce325b92f"
        },
        "date": 1735904542200,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 29.14873715743348,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 69.75103805853658,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.630592772944865,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 106.54409183749999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.15558650914633,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.6464265,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.08541324629763,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.82591433481538,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.51981787519952,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 140.71085537126453,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 186.84054135048927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.452866030145216,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 67.59215744999999,
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
          "id": "fbbab6238e854a433b89b038fd6e6010ec805d83",
          "message": "Handle non-existing common test resources gracefully (#324)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/323\n\nReplaces NPE with an IllegalArgumentException with a nice message.",
          "timestamp": "2025-01-03T15:57:07+04:00",
          "tree_id": "fecb171f5d4b6e3cf6acf0295a5ea53ddb109b9f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fbbab6238e854a433b89b038fd6e6010ec805d83"
        },
        "date": 1735906276189,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.058888512094725,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.17333151702128,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 55.06085171989266,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.36575578695651,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.6999340692844,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.35719766277226,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.50817413185171,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.448530956700505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.64157341345233,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 195.4288940369458,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.04457652704718,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 70.37719663285715,
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
          "id": "fde54d5568a0387df3108f422ce4933d8a4674cf",
          "message": "Commonize EmitterWithCommentEnabledTest (#329)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269",
          "timestamp": "2025-01-03T17:03:13+01:00",
          "tree_id": "b7cfa5cd5627019a1d6afd6b52c4e5128f7187e3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fde54d5568a0387df3108f422ce4933d8a4674cf"
        },
        "date": 1735921057450,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.15263854501396,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.48805102564103,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.76613805192173,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.5248188025641,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 18.873142385776333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.42221694705883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.16756647916978,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.66546156561368,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.37230335504895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 136.84500896585547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 194.04383580719204,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.07802483102132,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.32254018163266,
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
          "id": "c7feabaaeddce251b215e524d40513d72fffa138",
          "message": "Commonize YamlUnicodeReaderTest (#330)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-04T18:08:32+04:00",
          "tree_id": "e9539f6c48dedb04e82ced89ea1e6d6d929d1f15",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c7feabaaeddce251b215e524d40513d72fffa138"
        },
        "date": 1736000774848,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.92898868678482,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.077870067890316,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.63916737555556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.08360039522635,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.438436749572645,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.813545512276708,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.397143981753764,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.929134632995034,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.8703224236833,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 201.20480906111112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.327162482149184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 66.91046844714286,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85a31ae35427bee23ec2801718d3143b55eaa4ac",
          "message": "performance: avoid making codepoints window copy on prefix call (#331)\n\nI noticed that we make a copy of a codepoint window when `prefix(int)`\nmethod is called. It looks redundant since the `StreamReader` should not\nbe invoked from different threads and the resulting `String` is\nimmutable.\n\nI have changed the code build string without making a copy and got a\nsignificant performance increase on local benchmarks (let see how it\nbehaves in CI)\n\n```text\nBenchmark                                                 Mode  Cnt   Score   Error  Units\nLoadingTimeBenchmark.loadsOpenAiSchema                    avgt   10  15.655 ± 0.138  ms/op\nSnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema  avgt   10  13.554 ± 0.348  ms/op\n```\n\nRelated to #266",
          "timestamp": "2025-01-04T21:16:26+01:00",
          "tree_id": "09ac5beef6e92f9d509af5084d00350b3a490948",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/85a31ae35427bee23ec2801718d3143b55eaa4ac"
        },
        "date": 1736022792379,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.34949960512176,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.01629163636365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.785431761627244,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.717378834716534,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.357888998153392,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 158.82816025741417,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.39285535971953,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.333628657613374,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.353511772000004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.350978421562235,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.02358127624999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 60.98300654307404,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 89.02261799245282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9043a7c539a85544c9f5915a2703d0682846d88",
          "message": "performance: avoid boxing when making array's copy (#333)\n\nA small optimization to avoid creating an `Integer` object. Method\n`getOrNull` must return an object since it can return a `null` value.\nUsing `getOrElse` will always return a primitive value. It is not much\nbut it is something (until I figure out what to do with\n`StreamReader.update` method)\n\nRelated to #266",
          "timestamp": "2025-01-05T17:12:25+01:00",
          "tree_id": "8a6f093646107471b0f64ecf562822a64fcdbfab",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f9043a7c539a85544c9f5915a2703d0682846d88"
        },
        "date": 1736094638354,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.10285438169745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.33130622641508,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.361613810728215,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.3546160796875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.334900544938726,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.267282736158943,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.350624703911574,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.20281082925325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.53636240183364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 39.5785962022349,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.111336602020195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.340886807982255,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.18155324493671,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9c093398fe0ae732ac6863e0d0bf737d191ad4e",
          "message": "Update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.8.0 (#334)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx:kotlinx-serialization-json](https://redirect.github.com/Kotlin/kotlinx.serialization)\n| `1.7.3` -> `1.8.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.7.3/1.8.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.7.3/1.8.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/kotlinx.serialization\n(org.jetbrains.kotlinx:kotlinx-serialization-json)</summary>\n\n###\n[`v1.8.0`](https://redirect.github.com/Kotlin/kotlinx.serialization/blob/HEAD/CHANGELOG.md#180-RC--2024-13-10)\n\n\\==================\n\nThis is a release candidate for the next version. It is based on Kotlin\n2.1.0 and includes a few new features, as well\nas bugfixes and improvements:\n\n#### `@JsonIgnoreUnknownKeys` annotation\n\nPreviously, only global setting `JsonBuilder.ignoreUnknownKeys`\ncontrolled whether Json parser would throw exception if\ninput contained a property that was not declared in a `@Serializable`\nclass.\nThere were [a lot of\ncomplaints](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/1420)\nthat this setting is not\nflexible enough.\nTo address them, we added new `@JsonIgnoreUnknownKeys` annotation that\ncan be applied on a per-class basis.\nWith this annotation, it is possible to allow unknown properties for\nannotated classes, while\ngeneral decoding methods (such as `Json.decodeFromString` and others)\nwould still reject them for everything else.\nSee details in the corresponding\n[PR](https://redirect.github.com/Kotlin/kotlinx.serialization/pull/2874).\n\n#### Stabilization of `SerialDescriptor` API and\n`@SealedSerializationApi` annotation\n\n`SerialDescriptor`, `SerialKind`, and related API has been around for a\nlong time and has proven itself useful.\nThe main reason `@ExperimentalSerializationApi` was on\nSerialDescriptor's properties is that we wanted to discourage\npeople from subclassing it.\nFortunately, Kotlin 2.1 provides a special mechanism for such a\ncase —\n[SubclassOptInRequired](https://kotlinlang.org/docs/opt-in-requirements.html#opt-in-to-inherit-from-a-class-or-interface).\nNew `kotlinx.serialization.SealedSerializationApi` annotation designates\nAPIs\nas public for use, but closed for implementation — the case for\nSerialDescriptor, which is a non-sealed interface for\ntechnical reasons.\nNow you can use most of `SerialDescriptor` and its builders API without\nthe need to opt-in into experimental\nserialization API.\nSee the\n[PR](https://redirect.github.com/Kotlin/kotlinx.serialization/pull/2827)\nfor more details.\n\n*Note*: All `SerialKind`s are stable API now, except `PolymorphicKind` —\nwe may want to expand it in the future.\n\n#### Generate Java 8's default method implementations in interfaces\n\n**TL;DR This change ensures better binary compatibility in the future\nfor library. You should not experience any\ndifference from it.**\n\nkotlinx.serialization library contains a lot of interfaces with default\nmethod implementations. Historically, Kotlin\ncompiled a synthetic `DefaultImpls` class for them.\n[Starting from Kotlin\n1.4](https://blog.jetbrains.com/kotlin/2020/07/kotlin-1-4-m3-generating-default-methods-in-interfaces/),\nit was possible to compile them using as Java 8's `default` methods to\nensure\nthat new methods can still be added to interfaces without the need for\nimplementors to recompile.\nTo preserve binary compatibility with existing clients, a special\n`all-compatbility` mode is supported in compiler\nto generate both `default` methods and synthetic `DefaultImpls` class.\n\nNow, kotlinx.serialization finally makes use of this `all-compatibility`\nmode,\nwhich potentially allows us to add new methods to interfaces such as\n`SerialDescriptor`, `Encoder`, `Decoder`, etc.,\nwithout breaking existing clients. This change is expected to have no\neffect on existing clients, and no action from\nyour side is required.\nNote that Kotlin 2.2 plans to enable `all-compatibility`\nmode [by default](https://youtrack.jetbrains.com/issue/KTLC-269).\n\n#### Other bugfixes and improvements\n\n- Correctly skip structures with Cbor.ignoreUnknownKeys setting\n([#&#8203;2873](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2873))\n- Handle missing system property without NPE\n([#&#8203;2867](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2867))\n- Fixed keeping INSTANCE field and serializer function for serializable\nobjects in R8 full mode\n([#&#8203;2865](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2865))\n- Correctly parse invalid numbers in JsonLiteral.long and other\nextensions\n([#&#8203;2852](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2852))\n- Correctly handle serial name conflict for different classes in\nSerializersModule.overwriteWith\n([#&#8203;2856](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2856))\n- Add inline reified version of encodeToString as a Json member to\nstreamline the experience for newcomers.\n([#&#8203;2853](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2853))\n- Do not check kind or discriminator collisions for subclasses'\npolymorphic serializers if Json.classDiscriminatorMode\nis set to NONE\n([#&#8203;2833](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2833))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS44NS4wIiwidXBkYXRlZEluVmVyIjoiMzkuODUuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-06T17:13:50Z",
          "tree_id": "85b584d513a015c52153fb9bd7334e47e6798c8e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f9c093398fe0ae732ac6863e0d0bf737d191ad4e"
        },
        "date": 1736184552066,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 26.327513273885067,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.0110724055944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 55.697519886529314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 87.26484693050848,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.240350463694323,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.792952621843163,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.650275527290365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.90063125862054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.30659731517858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 39.51922362733136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.25456145277778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.32877913772488,
            "unit": "us/op",
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
          "id": "5b8059f27f9614a881e899d726b3c86d7faad6b8",
          "message": "Fix reading env vars for JS and WASM JS (only NodeJS) (#335)\n\nWhile working on\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/332, I found out\nthat the implementations for JS and WASM JS are missing. This PR focuses\non adding them. I don't want to add these in the PR that is related\nsolely to kotlinizing and commonizing the tests to give this fix a\nproper visibility in the release notes.\n\nThis change was tested within\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/332, and the goal\nis to merge that PR soon after this one lands.\n\nNote: env vars work only in a non-browser environment.",
          "timestamp": "2025-01-07T09:52:13+01:00",
          "tree_id": "f965a5b7945d60fc939fccc7c7d79270148f3ab5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/5b8059f27f9614a881e899d726b3c86d7faad6b8"
        },
        "date": 1736240553822,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.43876280032548,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.423532106019415,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.861504698985254,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.93514386791284,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 134.8601594709524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 38.4362784291849,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.63751363061225,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.42810525866263,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.77391314166667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.285091518391162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.402044308450705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.76768798857998,
            "unit": "us/op",
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
          "id": "f578517ae77806edfc501d055d0818a48a4f7ca9",
          "message": "Re-enable WASM JS tests (#336)\n\nRelated to\nhttps://kotlinlang.slack.com/archives/CDFP59223/p1736171757249559?thread_ts=1734964013.996149&cid=CDFP59223",
          "timestamp": "2025-01-07T11:10:43Z",
          "tree_id": "0f34a82b788149d8f81128ff7a537ef9fb11b557",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f578517ae77806edfc501d055d0818a48a4f7ca9"
        },
        "date": 1736249374648,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.38098808381318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.39288981132074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.869178585421057,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.979303385234896,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.66349075647627,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.1180254301449,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.940296221642093,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 147.86946629091295,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.35949200974753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.915358190442404,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.944393894059395,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 83.06230324862372,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 108.35326066530612,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c524570b11a8f1b3bffbe9016670f9bb889fa2bf",
          "message": "Update dependency com.squareup.okio:okio to v3.10.1 (#340)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio](https://redirect.github.com/square/okio) |\n`3.9.1` -> `3.10.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio/3.10.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio/3.10.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio/3.9.1/3.10.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio/3.9.1/3.10.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio)</summary>\n\n###\n[`v3.10.1`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3101)\n\n[Compare\nSource](https://redirect.github.com/square/okio/compare/3.10.0...3.10.1)\n\n*2025-01-07*\n\n- New: `FileSystem.close()` may prevent future access and/or clean up\nassociated resources depending on the backing implementation.\n`FakeFileSystem` will prevent future operations once closed.\n- `InputStream`s created from `BufferedSource.inputStream()` now have a\nmore efficient version of `InputStream.transferTo()` which reduces\nmemory copies.\n- `okio-nodefilesystem` is no longer publised as a JS project, but a\nKotlin multiplatform project with only a JS target. This change should\nnot affect consumers in any way, and is motivated by the Kotlin Gradle\nplugin deprecating the JS-only plugin.\n\n###\n[`v3.10.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3100)\n\n[Compare\nSource](https://redirect.github.com/square/okio/compare/3.9.1...3.10.0)\n\n*2025-01-06*\n\nThis version is equivalent to the subsequent 3.10.1, but it did not\nfully publish to Maven Central due to infrastructure problems.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS45Mi4wIiwidXBkYXRlZEluVmVyIjoiMzkuOTIuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-08T13:18:27Z",
          "tree_id": "445387951bf89377fda90cb5c29ca4e50ee05bb1",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c524570b11a8f1b3bffbe9016670f9bb889fa2bf"
        },
        "date": 1736343238567,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.1066104639938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.12280807367593,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.365213490625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 41.71538221499541,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.39582907473685,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 160.9960780735983,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.23307351471774,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.69337201748239,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.9073001268133,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.941286952333023,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.866355984410674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.133016952873554,
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
          "id": "3623872617fd42315b4e05035b41e6c21d231e6a",
          "message": "Renovate: ignore test resources (#344)\n\nWe don't need to bump deps in the test resources, like:\n\n* https://github.com/krzema12/snakeyaml-engine-kmp/pull/342\n* https://github.com/krzema12/snakeyaml-engine-kmp/pull/343\n\nThese updates appeared as we started moving the test resources to the\ncommon source set, so now we need to ignore yet another dir in Renovate.",
          "timestamp": "2025-01-08T15:24:53+01:00",
          "tree_id": "b5a5021c39fab7c0f7141e66aef93bfd0a49c26c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3623872617fd42315b4e05035b41e6c21d231e6a"
        },
        "date": 1736348796062,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.52076394632233,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.740710690266,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.74639372692306,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.409457882953014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.33947605151515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.00136198639827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.24422045876288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 151.28231664377404,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.83614935716622,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.86085127179905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.838077413481216,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.029948317849197,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "c69febd8b7008e1b1423eb2a69cae85d5b2705ab",
          "message": "Kotlinize and commonize EmitCommentAndSpacesTest (#339)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-08T15:14:37Z",
          "tree_id": "b9343396957b1c84630d1fd0d1d3e2c305d3c7d5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c69febd8b7008e1b1423eb2a69cae85d5b2705ab"
        },
        "date": 1736349951124,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.501152717160295,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.951465225157232,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.25743568382243,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.81565169062499,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.67850136146795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.144913890099005,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.37316354509,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.06305814503358,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.037219699179,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.982653216844557,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.844853838623894,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.74860556367375,
            "unit": "us/op",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ec26df7d27a489d7638e2d614054f8b3d15ef65",
          "message": "fix(deps): update dependency com.squareup.okio:okio-bom to v3.10.2 (#341)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio-bom](https://redirect.github.com/square/okio)\n| `3.9.1` -> `3.10.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio-bom/3.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio-bom/3.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio-bom/3.9.1/3.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio-bom/3.9.1/3.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio-bom)</summary>\n\n###\n[`v3.10.2`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3102)\n\n[Compare\nSource](https://redirect.github.com/square/okio/compare/3.10.1...3.10.2)\n\n*2025-01-08*\n\n-   Fix: `okio-nodefilesystem` artifact is no longer empty.\n\n###\n[`v3.10.1`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3101)\n\n[Compare\nSource](https://redirect.github.com/square/okio/compare/3.10.0...3.10.1)\n\n*2025-01-07*\n\n- New: `FileSystem.close()` may prevent future access and/or clean up\nassociated resources depending on the backing implementation.\n`FakeFileSystem` will prevent future operations once closed.\n- `InputStream`s created from `BufferedSource.inputStream()` now have a\nmore efficient version of `InputStream.transferTo()` which reduces\nmemory copies.\n- `okio-nodefilesystem` is no longer publised as a JS project, but a\nKotlin multiplatform project with only a JS target. This change should\nnot affect consumers in any way, and is motivated by the Kotlin Gradle\nplugin deprecating the JS-only plugin.\n\n###\n[`v3.10.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3100)\n\n[Compare\nSource](https://redirect.github.com/square/okio/compare/3.9.1...3.10.0)\n\n*2025-01-06*\n\nThis version is equivalent to the subsequent 3.10.1, but it did not\nfully publish to Maven Central due to infrastructure problems.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR becomes conflicted, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS45Mi4wIiwidXBkYXRlZEluVmVyIjoiMzkuOTIuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-08T17:59:25Z",
          "tree_id": "69386ad9d308dd372d2685356e42968a047c4041",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3ec26df7d27a489d7638e2d614054f8b3d15ef65"
        },
        "date": 1736360248592,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.348239138810147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.90113151503759,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.277128340460315,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.42658209078947,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 126.31757664261163,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.94826697206048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.017430049530645,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.942454263636233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.225853487643807,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.61543451459747,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.91919980392157,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.7815557223209,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.40117436666667,
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
          "id": "459e41633ef54cc0b43c73001c68355a8a9f5142",
          "message": "Kotlinize and commonize LoadSequenceTest (#346)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-09T13:05:24+03:00",
          "tree_id": "e0f914562996891f598deca9ebb7873b683e3b51",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/459e41633ef54cc0b43c73001c68355a8a9f5142"
        },
        "date": 1736418008865,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.19928825013313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.945199102531642,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 39.72928583447558,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.76429391829267,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.67969693898186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.0407964136447,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.063864918031857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.273392454472532,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.63307821603718,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.24918502002774,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.77992098039218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.36310453692115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.23707184153845,
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
          "id": "9d4db94d61682b53ce57217fd5e0fb572aa397bb",
          "message": "Kotlinize and commonize LoadMappingTest (#348)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269",
          "timestamp": "2025-01-09T18:31:01+04:00",
          "tree_id": "a68bd157874923e5fd6bb096058aea757ce35ede",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9d4db94d61682b53ce57217fd5e0fb572aa397bb"
        },
        "date": 1736433876338,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 80.8438824684974,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 138.47510666216218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.18019072388383,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.918394381227007,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.71771687884616,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.80667786357537,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.3333765368421,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 140.92322985871985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.18154866666669,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.234844604726785,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.914318433412493,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.379935092779967,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "ff29eefb6bccec2ee6876ac5addcfb66bb15fc04",
          "message": "Add leading slash in path to common test resources (#350)\n\nThanks to this, we'll be able to use `@Language(\"file-reference\")` to\nvalidate the paths in the IDE. Now it's impossible due to a bug in the\nlibrary that provides the annotation, see\nhttps://github.com/JetBrains/java-annotations/issues/116.\n\nThis PR is a mergeable part of\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/349.",
          "timestamp": "2025-01-10T11:04:15+03:00",
          "tree_id": "58bc8b99608912e3bd896d720ad9933c194acea7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ff29eefb6bccec2ee6876ac5addcfb66bb15fc04"
        },
        "date": 1736496799891,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.892331999485542,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.99881474538462,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.32105056553722,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.36299497692308,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.48104739833504,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 47.30732388206896,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.362529691176476,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 155.34334323722342,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.71341781340826,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.485242150157028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.61905836096687,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.552618470286797,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "aef07c9869059b6f3faa88f424dbcc7b246d01ee",
          "message": "Kotlinize and commonize RecursiveSetTest (#351)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269\n\n---------\n\nCo-authored-by: Oleg Smirnov <oleg31101996@gmail.com>",
          "timestamp": "2025-01-10T09:29:00+01:00",
          "tree_id": "06484cc1a1deaf3b11d80219951d44ab2c66fa45",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/aef07c9869059b6f3faa88f424dbcc7b246d01ee"
        },
        "date": 1736498537875,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.818329974246563,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.257419131292515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.36616948152707,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.17049497361147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 76.89224446825396,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.0805963673636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.380068863999995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 147.68494031744933,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.78753098505418,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 18.874142234496844,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.057675982115093,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.465773215311808,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "385c9002f7fbe66fdbc12679d2ae87201eb7e3fb",
          "message": "Kotlinize and commonize ListWithCommentTest (#353)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269",
          "timestamp": "2025-01-10T12:32:47+03:00",
          "tree_id": "ea798dcc93ee65991cafbce8e4e75012a18a16ad",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/385c9002f7fbe66fdbc12679d2ae87201eb7e3fb"
        },
        "date": 1736502416534,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.10133415340458,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.16684812522577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.204737155,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 38.36341940269046,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.11542092169811,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 158.77161229252732,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.37454630677965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.185760038996634,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 28.434295522196958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.772281176878415,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.550857693111617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.428563496319015,
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
          "id": "af72b6392a10057bf4c4d8f5ea560cbe4313b787",
          "message": "Allow larger common test resources (#355)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/354\n\nBefore this change, the build logic took all test resources, and\nconverted them into Kotlin code that was building a map using a single\nexpression with using nested `mapOf` function to represent the directory\nstructure. However, when trying to move existing JVM-specific resources\n(there's a lot of them), one could see a failing build with:\n\n```\nexception: java.lang.RuntimeException: Error generating class file CommonTestResources.class (compiled from [/Users/piotr/repos/snakeyaml-engine-kmp/build/generated-code-for-resources/src/commonTest/kotlin/CommonTestResources.kt]): Method too large: CommonTestResources.<clinit> ()V\ne\n```\n\nThis change puts every call to `mapOf(...)` or `ByteString.of(...)` into\na separate method, so that now the limitation is either the maximum\nnumber of files/directories in a given directory, or size of a single\nfile. It should unblock migrating tests to the common source set that\nrely on the large number of files (see a work-in-progress PR:\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/356).\n\nIt was still faster to not use KotlinPoet, but the generated code became\neven more ugly. It's likely that I'm going to use KotlinPoet, especially\nthat I'm planning to extract this functionality into a library.",
          "timestamp": "2025-01-10T17:24:00+01:00",
          "tree_id": "199a54f4ce4efc0b3d688e9be6e51fae22b4a6be",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/af72b6392a10057bf4c4d8f5ea560cbe4313b787"
        },
        "date": 1736527111379,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.374494448681567,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 30.835015806875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 103.91108863004827,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 183.16095162142858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.54278696498054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 35.28077960706317,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.708347386597936,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 156.4712822498888,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.26182408301888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.677677735071207,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.060029052909705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.435999385239228,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c19d7a52793d43fb3cb2b891b2138f059d32d0fd",
          "message": "chore(deps): update dependency io.github.typesafegithub:github-workflows-kt to v3.1.0 (#357)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.0.2` -> `3.1.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.1.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.typesafegithub:github-workflows-kt/3.1.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.typesafegithub:github-workflows-kt/3.0.2/3.1.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.0.2/3.1.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.1.0`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.1.0):\n3.1.0\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.0.2...v3.1.0)\n\n#### :star: Features\n\n- [allow fallback to local bindings server in consistency check\njob](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/984db40579b6be08b4030a5b05e8b7f1347a373d)\n- [add prefixes to step names for fallback\npath](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/df2da7667e120f06cbb8caeff8985ad5494a489d)\n\nThis release focuses on adding a way to mitigate the binding server's\navailability issues, if they ever reoccur. This opt-in feature can be\nused in the following way:\n\n```kotlin\nconsistencyCheckJobConfig = DEFAULT_CONSISTENCY_CHECK_JOB_CONFIG.copy(\n    useLocalBindingsServerAsFallback = true,\n),\n```\n\nwhich will result in adding an alternative path to your consistency\ncheck jobs that will be triggered if the original consistency check\nfails on compiling the script. Enabling this option costs you nothing in\nterms of extra CI time, if the server is up. If the server is down, it's\nusually an extra half a minute to up the server and rerun the workflow\nscript.\n\nExample: <img width=\"1087\" alt=\"Screenshot 2025-01-13 at 10 09 49\"\nsrc=\"https://github.com/user-attachments/assets/4fa44fc9-5eff-4b5b-b350-4613ef48515c\"\n/>\n\n#### :hammer_and_wrench: Fixes\n\nNone.\n\n#### :bomb: Breaking changes\n\nNone.\n\n#### :package: Dependencies\n\n- [update dependency it.krzeminski:snakeyaml-engine-kmp to\nv3.1.0](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/b300eaf468b9fc03e923d7836a4dd673304a6bc5)\n- [update dependency org.jetbrains.kotlinx:kotlinx-serialization-core to\nv1.8.0](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/97855d8d17b0c65f3c03c15f5f86c51d1b5c1ba2)\n- [update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to\nv1.8.0](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/dced05ec2ec62b8a7eaa02f438967ef8dec59f6c)\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.0.2...v3.1.0\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS45Mi4wIiwidXBkYXRlZEluVmVyIjoiMzkuOTIuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-13T13:09:59Z",
          "tree_id": "a5f0999e3cac1a3bc5304c3c676ec3fb1a0fdb83",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c19d7a52793d43fb3cb2b891b2138f059d32d0fd"
        },
        "date": 1736774435087,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.387539689925504,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.67242736966292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.8617093722666,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.31809949912912,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.329671260524556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.61429159292217,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.991327887374318,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.11666072138888,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.190439614243324,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.233970803496504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 82.39652974963647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 149.33577405681817,
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
          "id": "0b43f870d8b1ef4a8f713c7b3ccf9b4cae3a3aab",
          "message": "Add assertion to DumpWithoutCommentsTest (#359)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/317.\n\nLet's have this basic assertion, so that this test doesn't only rely on\ncertain function calls not throwing exceptions.",
          "timestamp": "2025-01-15T15:49:39+03:00",
          "tree_id": "f1896a64cddfbfbd97560b8841a1cf347e65107f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0b43f870d8b1ef4a8f713c7b3ccf9b4cae3a3aab"
        },
        "date": 1736945938773,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 84.79919879640273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.4677618,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.47164102971483,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.48901948431372,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 152.92631945938467,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.71423767264778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.484531675550386,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.843784644524646,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.59788368509143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.30182529061378,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.030943175796857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.81680631340206,
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
          "id": "75eba860f3a2ad9c7066e1704ac1c601a6cbe506",
          "message": "Kotlinize inherited tests (#358)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nFocuses just on porting a group of related tests (with a common parent\nclass) to Kotlin, for now JVM-specific. Commonization will be done in a\nseparate change.",
          "timestamp": "2025-01-15T17:31:38+01:00",
          "tree_id": "e8df00d45b1718491275190bc669b861bdf1e968",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/75eba860f3a2ad9c7066e1704ac1c601a6cbe506"
        },
        "date": 1736959392113,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.52789656383045,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.474547656249996,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.38546198556051,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 76.22396390565797,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 140.53248382307692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.76295425699592,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.3151017989796,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 156.57029053335745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.2905829431111,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.900492545072677,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.37416353185823,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.76404782597077,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32a2c2cf35ed3454d4ae8c2ba84411608ef23f30",
          "message": "fix(deps): update dependency org.snakeyaml:snakeyaml-engine to v2.9 (#361)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.snakeyaml:snakeyaml-engine](https://bitbucket.org/snakeyaml/snakeyaml-engine/src)\n| `2.8` -> `2.9` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.snakeyaml:snakeyaml-engine/2.9?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.snakeyaml:snakeyaml-engine/2.9?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.snakeyaml:snakeyaml-engine/2.8/2.9?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.snakeyaml:snakeyaml-engine/2.8/2.9?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMDcuMCIsInVwZGF0ZWRJblZlciI6IjM5LjEwNy4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-15T21:54:29Z",
          "tree_id": "74d0c19817bc817d8ff058db5417d56363e5f43b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/32a2c2cf35ed3454d4ae8c2ba84411608ef23f30"
        },
        "date": 1736978803088,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.0381628058867,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.44258505724138,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.426611989294024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.95773024747474,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 138.59536836749936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.24215032218925,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.016833218387728,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.357798418726624,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.62919301196149,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.19236393997602,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 75.75140151818182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.03413678241445,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 102.35220571428572,
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
          "id": "173e17e166fbe2923dc6eba03291ac2651339760",
          "message": "Update latest analyzed commit in snakeyaml-engine (#362)\n\nNo changes to port - the commits are just around releasing a new\nversion: 2.9.",
          "timestamp": "2025-01-16T10:49:58+01:00",
          "tree_id": "8a525280787c0eb321d6ca1ec34d352be20f9e79",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/173e17e166fbe2923dc6eba03291ac2651339760"
        },
        "date": 1737021612305,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.0644974643664,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.61625509102565,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 144.22245623649314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 120.88228770112309,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.096991216783756,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.136911632098,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.319260494655676,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.87271751160867,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.3839075216903,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.91791978730159,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.078143730099086,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.51321288166667,
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
          "id": "825efa01027069bfa050b618362643ef702d6b29",
          "message": "Use Okio in inherited tests (#360)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nI'm planning to implement Okio's file system to reflect the common test\nresources, so this refactoring brings us closer to this idea.",
          "timestamp": "2025-01-16T11:01:22+01:00",
          "tree_id": "112850cb938d3315f2fb61c59d7a70f5ebb45835",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/825efa01027069bfa050b618362643ef702d6b29"
        },
        "date": 1737022320371,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.49339657125208,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.99759396284415,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.6809123125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.968726228850606,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.87949225353535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.24907668112309,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.14427718409092,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.335472207869913,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.312267384786413,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.612085487057584,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.03166472688585,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.92759223630137,
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
          "id": "8008b4932960f3f4d42c518c7a75bfde967c4aad",
          "message": "Move inherited YAML resources to common resources (#356)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nThis change focuses solely on moving the resource files, and any\nadjustments that have to happen for it to work. It's a step towards\ncommonization of the inherited tests.",
          "timestamp": "2025-01-16T17:49:05+01:00",
          "tree_id": "43aa795bcb00c7ba66f3e34a2dc29ff7483312ea",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8008b4932960f3f4d42c518c7a75bfde967c4aad"
        },
        "date": 1737046839193,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.52604831119942,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.4291394117647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.30831425479881,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.909466160606065,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.06267511780077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.13862530294118,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 145.4391728137034,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.66578069885753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.71210759357259,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.25450507068075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.94342880622101,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 84.53518884328358,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 141.05948605588236,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c96e74b141896a0c5c4e825ce2082315f0cddaf1",
          "message": "Increase captureTimeout in karma configuration (#364)\n\nThis should help to reduce failures related to the #307 issue.\n\nAlso, this change moves karma config to the [correct\nlocation](https://karma-runner.github.io/6.4/config/configuration-file.html)\n- it did not have any effect before that",
          "timestamp": "2025-01-16T18:20:30+01:00",
          "tree_id": "acd0ec166ff30af07d5c237bd33ad4aa069ccefa",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c96e74b141896a0c5c4e825ce2082315f0cddaf1"
        },
        "date": 1737048629342,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.88262048267049,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.41416430285714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.58275502747716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 134.659117576,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.085669912925106,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.955890857048608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.29152189644926,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.336523596375574,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.24451101122449,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.82863288866085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 82.06903914614898,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.04070058490565,
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
          "id": "30d5f70060402ed5ec11c3268aae2b1ffeacddc9",
          "message": "Implement file system based on common test resources and use it in stringFromResources (#365)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nIt's a step towards using other common test resources. It focuses on\nimplementing the custom Okio file system, and while we're doing it, we\ncan reuse it for retrieving a single common test resource to avoid\nduplication.",
          "timestamp": "2025-01-17T14:35:20+01:00",
          "tree_id": "11fc8c4e9f8f16fc53881f2b6305a9aa9ef24405",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/30d5f70060402ed5ec11c3268aae2b1ffeacddc9"
        },
        "date": 1737121492485,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.82496025876689,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.12822430918367,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.26519181591894,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.30118194552327,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.067204196011126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.959624977481447,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.516487344869226,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.4729613118515,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 94.57664888888888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 30.65174462043732,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.05702078979592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 106.05903323581325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 140.4898326393939,
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
          "id": "e4c87faa070016c6dd9907e25e7bfcea027239b9",
          "message": "Commonize inherited tests (#363)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nIt was necessary to adjust the code a bit since some functions were\nstill JVM-specific.",
          "timestamp": "2025-01-17T19:56:52+04:00",
          "tree_id": "2bc364d12bdb84407f913d723f9f145903df3271",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e4c87faa070016c6dd9907e25e7bfcea027239b9"
        },
        "date": 1737130120984,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.719226962367,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.239280082251334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.5050153631579,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 26.704911172120735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.83801450379747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.92700105766964,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.76345628404256,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 151.17559848327807,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.67630884592218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.762451626515237,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.03613319279419,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.31187597523864,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53648e2d0db83aec8b8d039ed2a87ae4722df7f0",
          "message": "Increase browserSocketTimeout parameter for karma tests (#367)\n\nThere is one more parameter that can help reduce the chances of getting\nerror:\n> ChromeHeadless has not captured in 60000 ms, killing.\n\nRelated to #307",
          "timestamp": "2025-01-17T17:47:32+01:00",
          "tree_id": "6a6d1f4a7fa87fa1c9473e91607756755d5dced5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/53648e2d0db83aec8b8d039ed2a87ae4722df7f0"
        },
        "date": 1737133219889,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.95748797067533,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.40677563636363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.66355049548613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.38776916603774,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.073118946987805,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.322515612232902,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.42348967541505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 102.08453798376576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 192.030605953125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.01091627707093,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.87555450980393,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.241148755364808,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.9168865975,
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
          "id": "dabbc2631e2b8a6c6ae798816a2e06da468deab1",
          "message": "Remove JVM-specific way of reading test resources (#366)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.\n\nIt's not used anywhere, after migrating tests that use resources to\ncommon Kotlin.",
          "timestamp": "2025-01-17T20:13:51+01:00",
          "tree_id": "87540844a0b3c30c3f0580a94349fbd59b2e2af5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/dabbc2631e2b8a6c6ae798816a2e06da468deab1"
        },
        "date": 1737141855204,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.38648752922639,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.31808217450983,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.82883260911862,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.35526944444443,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 29.621579399515742,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 65.75220542048193,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.75827372346306,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.041605346575345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 133.50506251855958,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.66386060471024,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.998591871925335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.311003082033526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.395972539107618,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "945a60649b00c24355193ff59011d5f23a0e183e",
          "message": "Correct how config parameters for karma are set (#369)\n\nLast time we had an error during test execution on macOS we saw that the\n**captureTimeout** parameter was not applied. This happened because the\ncontent of `karma.config.d/karma.conf.js` file was merged into the\nfollowing block:\n\n```js\nmodule.exports = function(config) {\n // kotlin configuration\n // ...\n // content from our file\n}\n```\n\nAs a result, it looked like this:\n\n```js\nmodule.exports = function(config) {\n // kotlin configuration\n // ...\n // content from our file\n module.exports = function(config) {\n }\n}\n```\n\nThat was the reason, why our configuration changes were not applied.\nLet's see what happens with #307 issue after we correct the\n`karma.conf.js`",
          "timestamp": "2025-01-18T15:27:15+01:00",
          "tree_id": "0bd74427f86d9ff8861f221160e0ce2af89225fc",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/945a60649b00c24355193ff59011d5f23a0e183e"
        },
        "date": 1737211054332,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.06986306223963,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.573906144936707,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.25848425865969,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.96012331818181,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 131.83641175533754,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.66176352443065,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.350642355895307,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.68810268773418,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.967284248843447,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 78.30986744741975,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 119.40813697894737,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.16274505229596,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.58612777777778,
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
          "id": "3d0c7b1337818468f2d04fc2bb2fcd78558a3964",
          "message": "Kotlinize and commonize OptionalMarksTest (#371)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-19T10:51:50+01:00",
          "tree_id": "3c92ac9454d6b362b1d933bb997e77af24047c43",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3d0c7b1337818468f2d04fc2bb2fcd78558a3964"
        },
        "date": 1737281028120,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.54072376372736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 94.53415518518518,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.129560271730064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 90.25921777741935,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.168886392811295,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.49528501006712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.937420451359834,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 56.484251449438204,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.34435563532455,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.25696402583333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.88144771305455,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.26953719902604,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.289637000983,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
          "id": "e34e1e7e3cdf11fa5e2a339a9acd939508ab8f84",
          "message": "Remove Java-based YAML test suite (#370)\n\nCloses https://github.com/krzema12/snakeyaml-engine-kmp/issues/368.\n\nWe already use the same YAML test suite data, only in a newer version,\nintegrated with Kotlin Multiplatform, and with fetching data in the\nbuild logic instead of keeping them in the repo.",
          "timestamp": "2025-01-19T19:02:13+03:00",
          "tree_id": "6f4f8b5f9230e4a4a04656d31a9262f800a5dcf4",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e34e1e7e3cdf11fa5e2a339a9acd939508ab8f84"
        },
        "date": 1737303194567,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.686303950196624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.15681018125001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 136.06029314633028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.93913475978258,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.56177876414977,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.507872645603413,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.581958164010043,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.74827518554373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.30823047223154,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 77.58383427761194,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.3675084771618,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.10695317169811,
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
          "id": "b8ebf3412f858a91dcf7ba9e4ccbeb75a1d8102e",
          "message": "Allow reusing common test resources code generation (#373)\n\nThe goal is to allow accessing resources not only from\n`commonTest/resources`, but also from an arbitrary directory known\nduring build time. In particular, we already generate code for the YAML\ncomprehensive test suite\n([buildSrc/src/main/kotlin/buildsrc/tasks/GenerateYamlTestSuiteData.kt](https://github.com/krzema12/snakeyaml-engine-kmp/blob/main/buildSrc/src/main/kotlin/buildsrc/tasks/GenerateYamlTestSuiteData.kt)),\nand we can replace it with the new code generation approach being\nadjusted in this PR. Thanks to this change, we'll be able to expose the\nYAML test data as a separate Okio file system, conveniently traversable\nin the tests. This PR is just a piece of refactoring allowing it.",
          "timestamp": "2025-01-20T05:47:06+01:00",
          "tree_id": "5b32a7ef37c2d19412015b38f425bef6e1084565",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b8ebf3412f858a91dcf7ba9e4ccbeb75a1d8102e"
        },
        "date": 1737349281938,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.63256910209549,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 41.90361614283343,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.78491714799999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 151.9132054658056,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.08079885017682,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.322030250009014,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.75660446797783,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.23149321501568,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.558849919693465,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.48762591153846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.167548471376154,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.839611766386554,
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
          "id": "a447f091a9f27639dbb3f4b2bd11d49adf411329",
          "message": "Reuse common resource access infra for YAML test suite (#372)\n\nThanks to this change, we reuse what was built to access common\nresources to also access YAML test suite data, allowing us to simplify\nthe build logic and have a more uniform way of accessing both kinds of\ncommon resources.",
          "timestamp": "2025-01-20T13:45:49+01:00",
          "tree_id": "88c9b1ead888f868a935ce55a1519e7825bdc8e6",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/a447f091a9f27639dbb3f4b2bd11d49adf411329"
        },
        "date": 1737378024033,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 29.26715063710703,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.77605493448276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.606970722292594,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.26181959607844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 158.158688783963,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.2031689074074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.418598752004332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.99787400385256,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.15667322814099,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.07763555990842,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.48465451830039,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.91669265,
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
          "id": "d8f3b82e7d76292db0965f303e1f3266c07125b2",
          "message": "Kotlinize and commonize ComposerWithCommentEnabledTest (#374)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-20T19:06:45Z",
          "tree_id": "718b4755f916f0623ac5659f41e5c70ab8ea8b32",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d8f3b82e7d76292db0965f303e1f3266c07125b2"
        },
        "date": 1737400611453,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.20882355222838,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.03953884615385,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.19558015322333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.43433104313725,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 133.2562595656313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.5259924086512,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.82617941591082,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.10514410648799,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.129797185815768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.10361329545825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.90020515636363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.2080962716936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.74478822260869,
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
          "id": "1f93a67e7f592423d0f30ebec515c985fefcf3b0",
          "message": "Move code for JVM from 'java' to 'kotlin' directory (#375)\n\nIt's a purely cosmetic change, I think it doesn't influence anything\nfunctionally. However, we're heading towards the state of having 100%\nKotlin code, and this is a Kotlin library, so it makes sense to cut off\nfrom Java wrt. directory structure.",
          "timestamp": "2025-01-20T23:10:07+01:00",
          "tree_id": "db4a238d1657e28cad22fdacf14b08a2c3f73eed",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1f93a67e7f592423d0f30ebec515c985fefcf3b0"
        },
        "date": 1737411693753,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.22790068905731,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 59.32017225421686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 152.44205301034552,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 138.65169404391025,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.98998405307418,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.30172553621137,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.44279752315071,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.1934697133864,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.342283595597486,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 72.4355547578364,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.91149564102565,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.383325792520694,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 105.54494266222223,
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
          "id": "456f086e34bf6a6b33e9182ece719962e8200a4b",
          "message": "Move back JVM tests to 'java' directory (#376)\n\nIt's a follow-up after\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/375. It's a\npartial revert of it - we can leave `jvmMain/kotlin` since there's no\nJava files in `jvmMain`.\n\nI noticed this warning in the IDE:\n<img width=\"589\" alt=\"Screenshot 2025-01-21 at 07 54 07\"\nsrc=\"https://github.com/user-attachments/assets/078c6e3d-a00b-49d6-bbcf-4fa968b916e4\"\n/>\n\nAlso checked that the test isn't run.\n\nMoving back to `java` fixed the problem.\n\nApparently:\n* `java` directory can keep both Java and Kotlin code, to enable gradual\nmigration\n* `kotlin` directory can keep only Kotlin code\n\nSee\nhttps://kotlinlang.org/docs/gradle-configure-project.html#kotlin-and-java-sources:\n\n> Do not store Java .java files in the src/*/kotlin directory, as the\n.java files will not be compiled.\n> Instead, you can use src/main/java.",
          "timestamp": "2025-01-21T09:41:02+01:00",
          "tree_id": "23a48e7e0aacfac4e7632c4a82bbe667fe847fb8",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/456f086e34bf6a6b33e9182ece719962e8200a4b"
        },
        "date": 1737449538319,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.81378168329949,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.049464838944246,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.807596940425526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.47735283923265,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.41957148511906,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.57921856382478,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.510911961654326,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.74791753768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.07147585983551,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.840114956164385,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 60.02398241020232,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.30481612580647,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d1e00002db1ab1e8165a22d2873b7cba87e684e",
          "message": "chore(deps): update dependency io.github.typesafegithub:github-workflows-kt to v3.2.0 (#378)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.1.0` -> `3.2.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.2.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.typesafegithub:github-workflows-kt/3.2.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.typesafegithub:github-workflows-kt/3.1.0/3.2.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.1.0/3.2.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.2.0`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.2.0):\n3.2.0\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.1.0...v3.2.0)\n\n##### :star: Features\n\n- [allow setting custom step\nID](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/8661b2626c6a332b487d2db4e32c86e73edb069a)\n- [add 'type' argument to Release\ntrigger](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/dbcf5d5b0769e0ed5c73e7e6d58f01b5678333ae)\n- [allow building ActionStep outside of\njob](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/0406c8d26fe89fac484ae95e05d18ab6e674da46)\n- [add properties to WorkflowCall\ntrigger](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/50dbba1841b616fd7ec9a4bc3ffc09149bf6479a)\n- [add 'number' as input type of\nWorkflowDispatch](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/3e6fd5aa29012a399f834ed117f033c727586a14)\n\n##### :hammer_and_wrench: Fixes\n\nNone.\n\n##### :bomb: Breaking changes\n\nSome of the above features in very rare contexts may be breaking.\n\n##### :package: Dependencies\n\nNone.\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.1.0...v3.2.0\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMDcuMCIsInVwZGF0ZWRJblZlciI6IjM5LjEwNy4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-22T17:52:52Z",
          "tree_id": "56365dad9a5b3ff484de7564380a6bf1ad9ab851",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9d1e00002db1ab1e8165a22d2873b7cba87e684e"
        },
        "date": 1737569211043,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.94816590086626,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.10693116666667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.7014413149321,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.06793228383839,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.24652456948934,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.22402193578594,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.41511734204874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.92938284939822,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.910563157742704,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.9038930720895,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.35405351851851,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.264017120544192,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.26207568272727,
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
          "id": "2c111619a6f9e27cb2609ea707faaf5638dc7e56",
          "message": "Validate path to common test resources in IntelliJ (#349)\n\nThanks to this, one can click in the IDE to go to the test resource:\n\n<img width=\"1040\" alt=\"Screenshot 2025-01-09 at 22 25 04\"\nsrc=\"https://github.com/user-attachments/assets/6eeef159-d48b-438b-9b9e-7953cb16b17d\"\n/>\n\nand invalid paths are highlighted with red:\n\n<img width=\"594\" alt=\"Screenshot 2025-01-09 at 22 25 30\"\nsrc=\"https://github.com/user-attachments/assets/3abedb1d-de78-4b35-bdcf-3b09b4ebf16c\"\n/>\n\nTo achieve it, we need to have a leading slash, hence the changes in all\ncall sites of `stringFromResources` function.",
          "timestamp": "2025-01-22T23:42:50+01:00",
          "tree_id": "744858e6086686fd16d65b9901837c7bd5ff023e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/2c111619a6f9e27cb2609ea707faaf5638dc7e56"
        },
        "date": 1737586332150,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.565779647718923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.222194303164564,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.78623029738333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.50706705882351,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.92435576211553,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.05498594477612,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.426157117201015,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.65820079583333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.136833806357984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.549935074009706,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.734182892526576,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.31793022188972,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.7068252375689,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a7120e7a39f3741a2cf15916b636c518a024b5a",
          "message": "chore(deps): update plugin com.gradle.develocity to v3.19.1 (#380)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| com.gradle.develocity | `3.19` -> `3.19.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19/3.19.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19/3.19.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMDcuMCIsInVwZGF0ZWRJblZlciI6IjM5LjEwNy4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-23T14:08:26Z",
          "tree_id": "f8578fc43e92964550d8e717da80aece5c8bc07c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6a7120e7a39f3741a2cf15916b636c518a024b5a"
        },
        "date": 1737642155433,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.443079252515123,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.16850072521739,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 40.298008408512025,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.786965184536086,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.785416875405296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.80204442817066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.071544653999872,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.37639700013824,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.8791207603282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.76153944926136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.82822153846153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 79.19212921727501,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.48930170526313,
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
          "id": "1ca7d17e04c5bb36096c994378c78072c4f78e96",
          "message": "Kotlinize and commonize SerializerWithCommentEnabledTest (#379)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-23T19:18:59+01:00",
          "tree_id": "6efbfcf9383cde6a1983eba2fd5a9b3877766e87",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1ca7d17e04c5bb36096c994378c78072c4f78e96"
        },
        "date": 1737657273198,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 101.34873595739569,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 177.46104591470592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.36271767653252,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.185100556862736,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.058255400752977,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.02757153300039,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.16409972409474,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.01297354782247,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.04286225800001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.32930968587935,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.727617994074066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.67996096689839,
            "unit": "us/op",
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
          "id": "1a6a395a9c86fcd6512747a88fc9dad8af83f6f4",
          "message": "Kotlinize and commonize ParserWithCommentEnabledTest (#381)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-24T10:33:15+01:00",
          "tree_id": "a462210d906c40a9ffa2fce96fd3886a9a61a0e1",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1a6a395a9c86fcd6512747a88fc9dad8af83f6f4"
        },
        "date": 1737711689885,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.876092193718083,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.751497178740166,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.19001898762635,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.13000399183673,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.967349982675227,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.819229672676535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.38890626235607,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.07781387025688,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.0141205468085,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.20536653225387,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.8462413147541,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.85352866492147,
            "unit": "us/op",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e11275137ed5fbf2313c6660f774883fbbf6b715",
          "message": "chore(deps): update dependency gradle to v8.12.1 (#382)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | patch | `8.12`\n-> `8.12.1` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.12.1`](https://redirect.github.com/gradle/gradle/compare/v8.12.0...v8.12.1)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.12.0...v8.12.1)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMjUuMSIsInVwZGF0ZWRJblZlciI6IjM5LjEyNS4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-24T17:54:24Z",
          "tree_id": "7b1e7fdb518d554a861c32c0a801f5c801619108",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e11275137ed5fbf2313c6660f774883fbbf6b715"
        },
        "date": 1737742234101,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.86222457973969,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 40.15990951129033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 40.18937094417977,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.84244235490196,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.178620585676395,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.321893544487306,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.673239314962597,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 154.2261151488376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 135.80922071532524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.04002473829489,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.1760288888889,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 79.05148760153193,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 103.73729025121949,
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
          "id": "beeb568a86cbb0ffff2023d286bf34def638c966",
          "message": "Fix StringStreamDataWriter.toString to not consume buffer (#384)\n\nDuring debugging, it was confusing to see some contents of the buffer\nwhen pausing in the debugger before an assertion, but then seeing the\nassertion fail. It didn't make sense why the assertion fails - the value\nof the buffer was as expected.\n\nIt turned out that the debugger called `toString()`, consuming the\nbuffer, and leaving an empty buffer when performing the assertion. The\nsolution here is to just `peek()` the buffer in `toString()`, not\nconsume it.",
          "timestamp": "2025-01-26T10:25:12+01:00",
          "tree_id": "2fd9d2012f7c8c4be129a5be90b1b280e22317df",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/beeb568a86cbb0ffff2023d286bf34def638c966"
        },
        "date": 1737884208291,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.575005005014546,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.38703430666667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.636901911381415,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 75.83862900757576,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.8801434951886,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.7822275170962,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 47.60393693653846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.284764545800492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.47416125864863,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.050969338328276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 138.33411077838912,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.29320843263423,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02a591ae157efe906792d12f8958aef4d9604491",
          "message": "chore(deps): update plugin org.jetbrains.kotlin.plugin.allopen to v2.1.10 (#385)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.jetbrains.kotlin.plugin.allopen](https://kotlinlang.org/)\n([source](https://redirect.github.com/JetBrains/kotlin)) | `2.1.0` ->\n`2.1.10` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.0/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.0/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMjUuMSIsInVwZGF0ZWRJblZlciI6IjM5LjEyNS4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T09:28:08Z",
          "tree_id": "8b3c86c7585b350f8eb6711d488652baca27490e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/02a591ae157efe906792d12f8958aef4d9604491"
        },
        "date": 1737970780612,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.1369903925916,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.952089496039605,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.613448732161967,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.99117527472594,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.33613574047481,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.5310028181449,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.67032176082887,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.543409984946166,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.74622299482759,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.857983509554238,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.45593721623932,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.33708472331865,
            "unit": "us/op",
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
          "id": "b6a9a8f8c7b7c3b50b3cae23c39d555f1b1e1ea6",
          "message": "Kotlinize and commonize EmitterTest (#383)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-27T20:27:09+03:00",
          "tree_id": "596e9fc047a30b5a30de6186b92f5c459c71452b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b6a9a8f8c7b7c3b50b3cae23c39d555f1b1e1ea6"
        },
        "date": 1737999648273,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.70539910462651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.60966965272726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.32197163707336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.72358246021506,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.066448736157877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.10240675679031,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.3581738363528,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 144.82779379206303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.80502993437074,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.66628563266219,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 94.27100127272728,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.64865140106067,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.77539002016128,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36a1026737058d2c9c2d338a9029c6a22b1113bc",
          "message": "fix(deps): update dependency org.jetbrains.kotlin:kotlin-gradle-plugin to v2.1.10 (#386)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.jetbrains.kotlin:kotlin-gradle-plugin](https://kotlinlang.org/)\n([source](https://redirect.github.com/JetBrains/kotlin)) | `2.1.0` ->\n`2.1.10` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.0/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.0/2.1.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>JetBrains/kotlin\n(org.jetbrains.kotlin:kotlin-gradle-plugin)</summary>\n\n###\n[`v2.1.10`](https://redirect.github.com/JetBrains/kotlin/releases/tag/v2.1.10):\nKotlin 2.1.10\n\n#### Changelog\n\n##### Compiler\n\n- [`KT-73858`](https://youtrack.jetbrains.com/issue/KT-73858) Compose /\niOS: NullPointerException on building\n- [`KT-73454`](https://youtrack.jetbrains.com/issue/KT-73454) K2: Fix\ntype parameters mapping for typealiases with inner RHS\n- [`KT-73043`](https://youtrack.jetbrains.com/issue/KT-73043) K2\nCompiler does not allow references to inner constructors with\ntypealiases\n- [`KT-74040`](https://youtrack.jetbrains.com/issue/KT-74040)\nCompilation of inner class usage does not check the visibility of parent\nclass during compilation in different rounds\n- [`KT-73339`](https://youtrack.jetbrains.com/issue/KT-73339) K2:\n\"VerifyError: Bad type on operand stack\" because of missing implicit\ncast on generic field receiver with star projection\n- [`KT-72585`](https://youtrack.jetbrains.com/issue/KT-72585) K2:\nCompilation failure when upgrading to Kotlin 2.0.20+: Cannot replace\ntop-level type with star projection: S\n- [`KT-73399`](https://youtrack.jetbrains.com/issue/KT-73399)\ncompile-time JVM codegen failure on a KProperty argument of a\nKSuspendFunction parameter\n- [`KT-72725`](https://youtrack.jetbrains.com/issue/KT-72725) KMP:\nUnsupported actualization of inherited java field in expect class\n- [`KT-73153`](https://youtrack.jetbrains.com/issue/KT-73153) K2:\nStandalone diagnostics on type arguments are not reported\n\n##### Compose compiler\n\n- [`CMP-5680`](https://youtrack.jetbrains.com/issue/CMP-5680) Compose\ncompiler: unexpected stability warnings for classes compiled with 2.0.10\n- [`b/381407900`](https://issuetracker.google.com/issues/381407900)\nAvoid adding Compose annotations on synthetic classes\n\n##### IR. Inlining\n\n- [`KT-73981`](https://youtrack.jetbrains.com/issue/KT-73981)\nCherry-pick the fix for KT-73482 to 2.1.10\n\n##### JavaScript\n\n- [`KT-70778`](https://youtrack.jetbrains.com/issue/KT-70778) Kotlin Js\ncompanion is undefined in production build\n- [`KT-73130`](https://youtrack.jetbrains.com/issue/KT-73130) KJS:\nMissed `break` for do/while in generated JS code\n- [`KT-58797`](https://youtrack.jetbrains.com/issue/KT-58797) Optimize\nthe code generated for objects on JS and Wasm backends\n\n##### Klibs\n\n- [`KT-70146`](https://youtrack.jetbrains.com/issue/KT-70146) \\[KLIB\nResolve] Don't fail on nonexistent transitive dependency\n- [`KT-73951`](https://youtrack.jetbrains.com/issue/KT-73951) Workaround\nfor \"Partial linkage engine may not patch some discrepancies in IR when\ncompiling Kotlin/Native static caches\" in 2.1.10\n\n##### Native\n\n- [`KT-73559`](https://youtrack.jetbrains.com/issue/KT-73559) K/Native:\nAndroidNativeArm64 linking fails starting from Kotlin 2.1.0\n\n##### Tools. CLI\n\n- [`KT-73967`](https://youtrack.jetbrains.com/issue/KT-73967) JDK 25:\n\"IllegalArgumentException: 25-ea\" with EA builds\n\n##### Tools. Daemon\n\n- [`KT-73311`](https://youtrack.jetbrains.com/issue/KT-73311) \"Unable to\nrelease compile session, maybe daemon is already down\" flakiness\n\n##### Tools. Gradle\n\n- [`KT-73728`](https://youtrack.jetbrains.com/issue/KT-73728)\n'generatePomFileForMavenPublication' creates pom with dependencies with\n'unspecified' version\n\n##### Tools. Gradle. Multiplatform\n\n- [`KT-73620`](https://youtrack.jetbrains.com/issue/KT-73620) KMP 2.1.0:\nTransitive dependency is broken when setting publication groupId\n\n##### Tools. Gradle. Native\n\n- [`KT-73572`](https://youtrack.jetbrains.com/issue/KT-73572) \\[Gradle]\n`kotlin.native.cacheKind=none` doesn't work anymore\n- [`KT-71419`](https://youtrack.jetbrains.com/issue/KT-71419) Light\nbundle KGP IT run against a stable K/N version\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xMjUuMSIsInVwZGF0ZWRJblZlciI6IjM5LjEyNS4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-28T12:17:58Z",
          "tree_id": "9fbb69c4bffff4a90a2c4c035ced6751af02ac8e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/36a1026737058d2c9c2d338a9029c6a22b1113bc"
        },
        "date": 1738067495896,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.34948684872487,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 60.455774551263985,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.74182814313727,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 34.26462031677111,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.43533114642857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.487207490036237,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.71394685142394,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.066308128872066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.68028428929682,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.00219625607406,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.946561882050887,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.95186695075758,
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
          "id": "cc71a2c8906f6c81ea178fcb141cad60e26c2e64",
          "message": "Kotlinize and commonize ScannerWithCommentEnabledTest (#387)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-01-28T22:31:03+01:00",
          "tree_id": "635a43931c5ab3817bede39f5ff9fda5865a617b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/cc71a2c8906f6c81ea178fcb141cad60e26c2e64"
        },
        "date": 1738100493987,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.583493387055384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.11615281632653,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.184781960596673,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.137824008392226,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.2462108544894,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 145.32879217738304,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.80180629290153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 26.854971640360407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.880275537179486,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.1700193219291,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.08138159220979,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.10506034385965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5d5e87c202a536c0208c53b98978c16f11e0be4",
          "message": "Implement partial source reading in StreamReader (#389)\n\nWe implement an extension method that uses underlying `Buffer` in\n`BufferedSource` to check the boundaries for that valid codepoint in the\nsource\n\nCloses #388\n\n---------\n\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2025-02-01T07:38:01+01:00",
          "tree_id": "4d3e0364b489880b2016748c3867279e583a4810",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f5d5e87c202a536c0208c53b98978c16f11e0be4"
        },
        "date": 1738392642196,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.67898897292101,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.93580960344828,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.33710127675161,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.74472945454545,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.973666480054604,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.07929937722772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.231545314324087,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.531358777672732,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.359195150872633,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 160.0056195458489,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.76463511257708,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 27.35978771968059,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 45.20637664326924,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0ce6a42672ca547a6329f9fb3b5852919fe8e37",
          "message": "fix(deps): update dependency io.kotest:kotest-runner-junit5 to v6.0.0.m2 (#396)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.kotest:kotest-runner-junit5](https://redirect.github.com/kotest/kotest)\n| `6.0.0.M1` -> `6.0.0.M2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.kotest:kotest-runner-junit5/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.kotest:kotest-runner-junit5/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.kotest:kotest-runner-junit5/6.0.0.M1/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.kotest:kotest-runner-junit5/6.0.0.M1/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xNDUuMCIsInVwZGF0ZWRJblZlciI6IjM5LjE0NS4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-04T13:42:02Z",
          "tree_id": "15169873ab19c6a1bdf1994a18945bf0ba2ea74a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e0ce6a42672ca547a6329f9fb3b5852919fe8e37"
        },
        "date": 1738677325811,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.81301553038262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.49836054513273,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.818069399606046,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.67356221386139,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.099330016265135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.043290304776434,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.12021934725776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 132.0120571325356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.91983268263888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.096212373495874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.5857910607843,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.14717430878007,
            "unit": "us/op",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4c88075fc4f404eeb16946648b1eb1b5903da79",
          "message": "fix(deps): update dependency io.kotest:kotest-framework-multiplatform-plugin-gradle to v6.0.0.m2 (#393)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.kotest:kotest-framework-multiplatform-plugin-gradle](https://redirect.github.com/kotest/kotest)\n| `6.0.0.M1` -> `6.0.0.M2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.kotest:kotest-framework-multiplatform-plugin-gradle/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.kotest:kotest-framework-multiplatform-plugin-gradle/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.kotest:kotest-framework-multiplatform-plugin-gradle/6.0.0.M1/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.kotest:kotest-framework-multiplatform-plugin-gradle/6.0.0.M1/6.0.0.M2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xNDUuMCIsInVwZGF0ZWRJblZlciI6IjM5LjE0NS4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-04T17:23:16Z",
          "tree_id": "44dfec757357b5305c4f7e99b9c660bc71ec7af9",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d4c88075fc4f404eeb16946648b1eb1b5903da79"
        },
        "date": 1738690905489,
        "tool": "jmh",
        "benches": [
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 41.48237332520286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.134627509278346,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.85856602557279,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.437660369642934,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.827781455528985,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.9735333105662,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.4246830375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.83512094395282,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 118.05313175879135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 191.80245362903224,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 29.36851791460765,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 68.5126109375,
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
          "id": "d6ad5b61f67a11a3570b3cf6c5bfb4bc35d916dc",
          "message": "Synchronize kotest version to 6.0.0.M1 via version catalog (#398)\n\nI see that Renovate managed to bump two packages, and for other\npackages, CI is failing. Not sure if it's because the artifacts are\nbroken, or the changes need to go together. To solve it, let's make\nRenovate bump versions of all kotest-related packages at once, for the\nsake of consistency.\n\nThis change downgrades some kotest-related libraries to 6.0.0.M1.",
          "timestamp": "2025-02-05T08:43:33+01:00",
          "tree_id": "c4b9d4c6f6671cfd11329bf793d24866a0156c87",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d6ad5b61f67a11a3570b3cf6c5bfb4bc35d916dc"
        },
        "date": 1738742297579,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.10625841571529,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.25791608225806,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.416455620603024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.16899239740259,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.13254601668278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.313731742045455,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.93066047505864,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.978083627830113,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.432794189087875,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 156.16142621635225,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.26781831346153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.63103058215692,
            "unit": "us/op",
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
          "id": "15d752d04d8df61f0acf60ee053b5b30c924fbb6",
          "message": "Kotlinize and commonize JsonScalarResolverTest (#399)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/269.",
          "timestamp": "2025-02-05T21:19:56Z",
          "tree_id": "00dbabdd548c00407f575ea090110c5ed55cf8f5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/15d752d04d8df61f0acf60ee053b5b30c924fbb6"
        },
        "date": 1738790950725,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.48117598097502,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.0154988235294,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.344857635342464,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.841628267346934,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.78302096955119,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.656900895521535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.255702470064076,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.34796606374954,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.45291000396136,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.327710251514752,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.69352330482759,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.949093691712335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.17637231,
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
          "id": "8632ef03ede5de0ea855cc4b462fec2096b73fe2",
          "message": "Fix CoreScalarResolver.INT regex to work with JS (#403)\n\nFound when converting the corresponding test to KMP:\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/397\n\nWhat helped me here is this tool that renders the regex as a graph:\nhttps://www.debuggex.com/\n\nBefore the fix - I noticed that `^` and `$` are attached to the groups\nnearest to them:\n<img width=\"306\" alt=\"Screenshot 2025-02-06 at 09 05 30\"\nsrc=\"https://github.com/user-attachments/assets/c3e2c00f-456f-4e5b-b3ff-820651eefd7b\"\n/>\n\nAfter the fix - creating a new group that contains the rest fixes the\nproblem:\n<img width=\"347\" alt=\"Screenshot 2025-02-06 at 09 06 08\"\nsrc=\"https://github.com/user-attachments/assets/2195e571-574a-468a-bf0c-b83cadc64c62\"\n/>",
          "timestamp": "2025-02-06T09:18:21+01:00",
          "tree_id": "196c270e882caf457a28ef2fe89def115a39ea98",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8632ef03ede5de0ea855cc4b462fec2096b73fe2"
        },
        "date": 1738830686573,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 90.04914503708258,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 166.78055764634146,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.263889748497213,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.02518526785715,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 43.95551151977984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.81898729797979,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.917804416692746,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.523825004638933,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.82596796663117,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.005639923644,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.48184281224489,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.84860400875414,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 94.27868245283018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b28044a7cef65132a3c9f6a8b1ca340d3a90deba",
          "message": "Increase regex readability (#391)\n\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2025-02-06T12:31:21+01:00",
          "tree_id": "86a299c5a5c8aa856453a3f8a4288afbe6b35613",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b28044a7cef65132a3c9f6a8b1ca340d3a90deba"
        },
        "date": 1738842384029,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 63.9189296383398,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 44.38272767102433,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.68443686404494,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.533801867171512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.76986624439512,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.831038066637298,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.71327264755246,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.9061112973131,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.165404979730646,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 58.873179217647056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.71427721315374,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 87.17947071607142,
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
          "id": "8beaaea1219fd627a507cbe1975471d82a420779",
          "message": "Remove dependency on kotest-framework-api (#404)\n\nLooks like we don't use it anywhere, and kotest 6.0.0.M2 doesn't have\nthis artifact (see https://github.com/kotest/kotest/pull/4590).",
          "timestamp": "2025-02-10T09:03:28+01:00",
          "tree_id": "3c1531bd4891685f3c4e917d37ed56039d6192d0",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8beaaea1219fd627a507cbe1975471d82a420779"
        },
        "date": 1739175346858,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.282639894605147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.412469842657345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.8247310813605,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.9820124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.93997073134706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 90.62832618205127,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.48330206067617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.58856768387098,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.136529036736647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.915144135138853,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.910892528207768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.30363618996276,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 139.19616185129718,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "434ac1feae15a37b3d73eaf04feb3e28eb204427",
          "message": "Verify emitted events also for error test suite tests (#392)",
          "timestamp": "2025-02-11T12:10:39+01:00",
          "tree_id": "f522175730718a65cd7c81687fcb30ed5ab041a2",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/434ac1feae15a37b3d73eaf04feb3e28eb204427"
        },
        "date": 1739272990023,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.46960364493087,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.2547198,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.39321362799262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.15794388888888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.604219413485858,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.18529438679071,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.44911123799833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.0524166385798,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.14196956785713,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 38.9854498679219,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.2621277038835,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.194230319669604,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.86586254395605,
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
          "id": "92939fc8885108caaa3ebddafef83cd877d7fa40",
          "message": "Fix publishing for native targets (#406)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/405.\n\nJudging by the comment, this piece of config is probably for the sake of\nkeeping the directory tree clean, and not to implement certain behavior.\nThis piece also breaks publishing of KLibs in Kotlin 2.1.0, because of\nreasons described in\nhttps://youtrack.jetbrains.com/issue/KT-74871/KN-NoSuchFileException-default-targets-linuxx64-kotlin-with-snakeyaml-engine-kmp-3.1.0#focus=Comments-27-11510364.0-0.",
          "timestamp": "2025-02-11T22:36:27+01:00",
          "tree_id": "0cfa85df121d9d7af6322dcab3c1e9e3361bbf96",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/92939fc8885108caaa3ebddafef83cd877d7fa40"
        },
        "date": 1739310567916,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.22199661391354,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.3794462254717,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.02789993572779,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 94.64319642033897,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 65.05273476771984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 34.274456029914916,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.32099024347825,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.47894336065944,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.787671906691063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.965560962558275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 147.37575671366474,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 144.22071507829895,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "6e89ef054476e168438b33f5a337b1a3bf9309c4",
          "message": "Prepare for releasing version 3.1.1",
          "timestamp": "2025-02-11T22:52:40+01:00",
          "tree_id": "85bf8add3b12ea4274702816f3a19d8e424d22af",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6e89ef054476e168438b33f5a337b1a3bf9309c4"
        },
        "date": 1739311438867,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.412006798192227,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 42.311813476576575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.20611740707162,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.32241018181819,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.395740628872375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.9970103029703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.48725295568889,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.23506821919953,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.932730212701,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.04414645708624,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.54304538751018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.02134996597728,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 77.74950804242425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "committer": {
            "email": "git@krzeminski.it",
            "name": "Piotr Krzeminski",
            "username": "krzema12"
          },
          "distinct": true,
          "id": "22e58b63e996e4835d10c0822f54dbbe1c7e6285",
          "message": "Prepare for next dev cycle",
          "timestamp": "2025-02-11T23:03:48+01:00",
          "tree_id": "e1dcd9df25db51c81dafa7d664beeb2de98c7a35",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/22e58b63e996e4835d10c0822f54dbbe1c7e6285"
        },
        "date": 1739312056296,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 37.62645486116284,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.4710802125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.59648548995591,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.06315673870967,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.259986772233056,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.398168695454544,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.644739897031805,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.05678456215056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.611799919629668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 130.0522115421732,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.93968697967405,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 64.65593800296551,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2e77a54d08ffd546b10b3663ec880a030ed16b1",
          "message": "Centralize definition of default schema (#407)",
          "timestamp": "2025-02-12T10:10:42Z",
          "tree_id": "ec6237cd20e058ecca3bb46d2e6c6b1035ee4a21",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/a2e77a54d08ffd546b10b3663ec880a030ed16b1"
        },
        "date": 1739355939484,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.42390940181509,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.77762338905175,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.688054357160363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 155.24319899727234,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.40293144444442,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 38.40825419772144,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.26565977525773,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.86841891417619,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.092253474759126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.94382294374999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 19.185551047145342,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.674225717834396,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a829841e2a51f375675cbe7aabb40635cab39f46",
          "message": "Make schema-specific tests independent from default schema (#408)",
          "timestamp": "2025-02-12T16:13:01+01:00",
          "tree_id": "b0f28eb00406b259331b3c9279600476ceaea9c7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/a829841e2a51f375675cbe7aabb40635cab39f46"
        },
        "date": 1739373863399,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.55822885311093,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 118.0712088372093,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.16278575625508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 103.66207581428571,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.681198763139957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.51036405853658,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.859160252428865,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.227220490519173,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.36714358909574,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.1790940904856,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.67360299666137,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.55892635015533,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.841532358762876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Bjoern@Kautler.net",
            "name": "Björn Kautler",
            "username": "Vampire"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac01468f2eda19c65ad6f2c1d4701431e85878e1",
          "message": "Use Core Schema by default as recommended by the YAML specification (#390)",
          "timestamp": "2025-02-13T11:49:10+01:00",
          "tree_id": "7fc7a6268929de24117fca3c153db1d672465055",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ac01468f2eda19c65ad6f2c1d4701431e85878e1"
        },
        "date": 1739444440864,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.40145881494098,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.48562735849056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.813768003675982,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.693728868772066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.494748496224755,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 152.37604775005587,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.2820045432742,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.23052229148375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.33812766595745,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.910833907210744,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.43841786153847,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.303613813569836,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.71668706405228,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86aa75ffc3c91f78f463b75e85888fa5aa626e25",
          "message": "chore(deps): update plugin com.gradle.develocity to v3.19.2 (#411)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| com.gradle.develocity | `3.19.1` -> `3.19.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.1/3.19.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/3.19.1/3.19.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xNjcuMSIsInVwZGF0ZWRJblZlciI6IjM5LjE2Ny4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-18T18:33:20Z",
          "tree_id": "e2c911510e6492d7c3cad9bab24a6ceeb1131351",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/86aa75ffc3c91f78f463b75e85888fa5aa626e25"
        },
        "date": 1739904439802,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.00363032725079,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.82139888644068,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.21090614480978,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.63400610487009,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.832110951529664,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.17377888648747,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.30407136037735,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 42.872800994401885,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.07267934044944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.24964243664499,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.86269673913046,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.702844818667536,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.19037925473684,
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
          "id": "6351fea515b79c1c6ffe3ace8d0db0c54ec9e81b",
          "message": "Extend more Karma timeouts (#412)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/307.\n\nHelped get https://github.com/krzema12/snakeyaml-engine-kmp/pull/410\nthrough.",
          "timestamp": "2025-02-19T22:05:37Z",
          "tree_id": "4d6eeac3d57b2a66278ca9a76ff1ba0b5da5d25a",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6351fea515b79c1c6ffe3ace8d0db0c54ec9e81b"
        },
        "date": 1740003511282,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.62682000010064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.277070583132534,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.20209908373879,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.03793173076924,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.971571983078473,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.751543077018233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.42395097606836,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.1980759862049,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 132.7022934821361,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.46950003334041,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 55.627684854117646,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.78998394455031,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.03973308571429,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oleg31101996@gmail.com",
            "name": "Oleg Smirnov",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4efa640cb9c5a0ad665682d8a4456ccd3637e6e5",
          "message": "test: port ReferencesTest test to KMP, use consistent time measurements (#410)",
          "timestamp": "2025-02-20T09:11:36+01:00",
          "tree_id": "7cb1b1b0828c88a75dd4f2c090c5cf8dcf99173e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4efa640cb9c5a0ad665682d8a4456ccd3637e6e5"
        },
        "date": 1740039795077,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.228918485852216,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.711883557012317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.879305212736632,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 139.64830047594273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.1591883465801,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.04620705015357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.883394334042556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 71.7861529571235,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.63227782608695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.551114488758763,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.46308724503816,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 85.83592399908835,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.94481414390243,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4ca1b26a6966e1c854b0a4e6d46b7be50369d31",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.12.0 (#415)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.11.4` ->\n`5.12.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.11.4/5.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.11.4/5.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xNzYuMiIsInVwZGF0ZWRJblZlciI6IjM5LjE3Ni4yIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-21T15:16:15Z",
          "tree_id": "d3a13a73fc205585e34f7dd21748f9457daae40e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/f4ca1b26a6966e1c854b0a4e6d46b7be50369d31"
        },
        "date": 1740151700082,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 56.01055848609692,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.06504135714285,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 26.47070137080265,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.9976071989899,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 77.34526146980895,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.11408794871795,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.422378447967894,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.215753923147616,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.445235215791556,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 153.23305400727776,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.77971420958332,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.36915760791403,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 57.04106901868131,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a5ff3debbbe78221a1b2b5b0e054de7bb436593",
          "message": "chore(deps): update dependency gradle to v8.13 (#416)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | minor | `8.12.1`\n-> `8.13` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.13`](https://redirect.github.com/gradle/gradle/compare/v8.12.1...v8.13.0)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.12.1...v8.13.0)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4xNzYuMiIsInVwZGF0ZWRJblZlciI6IjM5LjE3Ni4yIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-25T10:58:22Z",
          "tree_id": "1fbc615482dffa0fa5ead110bf69759a36ba5d7e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3a5ff3debbbe78221a1b2b5b0e054de7bb436593"
        },
        "date": 1740481909412,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.06607893123817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.726806248937834,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.34577059029126,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.560863935994583,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.520221227990156,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.48856720940754,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 154.43864004788495,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.68795010851063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.85668580455293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.468163100000005,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.616490939919245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.55620335230769,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62692789bde431038e2ff359ec9714752ceb8ca0",
          "message": "fix(deps): update dependency com.google.guava:guava to v33.4.5-jre (#418)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.google.guava:guava](https://redirect.github.com/google/guava) |\n`33.4.0-jre` -> `33.4.5-jre` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.google.guava:guava/33.4.5-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.google.guava:guava/33.4.5-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.google.guava:guava/33.4.0-jre/33.4.5-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.google.guava:guava/33.4.0-jre/33.4.5-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMDcuMSIsInVwZGF0ZWRJblZlciI6IjM5LjIwNy4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-20T00:07:55Z",
          "tree_id": "fad397a9bed2e12c89a53b338314c9c7aba3e775",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/62692789bde431038e2ff359ec9714752ceb8ca0"
        },
        "date": 1742430213001,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 156.8480203044239,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.50486591481481,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 38.487654613076316,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.668093784375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.19782674217636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.054107722846524,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.964956544419033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.777846390609795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.52182295789473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.424913902921737,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.98506160130719,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.17783445871761,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.74745037037036,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c50cc7d03f37a36bbc36d1dae6252b93f068ed59",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.12.1 (#417)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.12.0` ->\n`5.12.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.12.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.12.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.12.0/5.12.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.12.0/5.12.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMDAuMCIsInVwZGF0ZWRJblZlciI6IjM5LjIwMC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-20T02:35:04Z",
          "tree_id": "ae2b34a056953c8f124efc1d50cad5147befb21b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c50cc7d03f37a36bbc36d1dae6252b93f068ed59"
        },
        "date": 1742438739065,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 56.71029006870282,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.04234904166668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.89887822298407,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.63458471698112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.558249426355303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.499008168211915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.1812994465908,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.96900025156722,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.96910965845465,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.56461180206186,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.29813865568203,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.133084304807163,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.658046947479434,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c69b87c2bdc76eb12ba5a44016e0e80781b3033d",
          "message": "fix(deps): update dependency com.google.guava:guava to v33.4.6-jre (#420)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.google.guava:guava](https://redirect.github.com/google/guava) |\n`33.4.5-jre` -> `33.4.6-jre` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.google.guava:guava/33.4.6-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.google.guava:guava/33.4.6-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.google.guava:guava/33.4.5-jre/33.4.6-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.google.guava:guava/33.4.5-jre/33.4.6-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMDcuMSIsInVwZGF0ZWRJblZlciI6IjM5LjIwNy4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-25T20:20:56Z",
          "tree_id": "ada21eab665aa81f1fcd00c60629285b7c276ce3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/c69b87c2bdc76eb12ba5a44016e0e80781b3033d"
        },
        "date": 1742934661941,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.771854219679245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.988184583000006,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 132.2449513939642,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.04692847541666,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.19673390985376,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.15601817659575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.0291573122241,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.147790598360324,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.83246522283909,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 116.99722561917636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 202.22679079259257,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.55485463483146,
            "unit": "us/op",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fe5a257319b8adf6b0806e99c7339a7df0c1511",
          "message": "chore(deps): update dependency io.github.typesafegithub:github-workflows-kt to v3.3.0 (#421)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.2.0` -> `3.3.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.3.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.typesafegithub:github-workflows-kt/3.3.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.typesafegithub:github-workflows-kt/3.2.0/3.3.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.2.0/3.3.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.3.0`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.3.0):\n3.3.0\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.2.0...v3.3.0)\n\n##### :star: Features\n\nNone.\n\n##### :hammer_and_wrench: Fixes\n\n- [allow running Kotlin-based step if multiple workflows in single\nfile](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/aeb2e200fe921aedb75f5d250f9020fb2a25c64f)\n\n##### :bomb: Breaking changes\n\n- [allow running Kotlin-based step if multiple workflows in single\nfile](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/aeb2e200fe921aedb75f5d250f9020fb2a25c64f)\n- breaking only if you use the experimental feature of Kotlin-based\nsteps\n\n##### :package: Dependencies\n\n- [update kotlin monorepo to\nv2.1.10](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/035e84e095d58125851c056fa6480af27f3760fa)\n- [update dependency it.krzeminski:snakeyaml-engine-kmp to\nv3.1.1](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/c9ee38f410ac6ce7d33a89af25df28282a90cee4)\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.2.0...v3.3.0\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMDcuMSIsInVwZGF0ZWRJblZlciI6IjM5LjIwNy4xIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\n---------\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Piotr Krzeminski <git@krzeminski.it>",
          "timestamp": "2025-03-28T14:56:59+01:00",
          "tree_id": "8ee16841f18b4e117ad4ddbab25b3f80ccaad7ac",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1fe5a257319b8adf6b0806e99c7339a7df0c1511"
        },
        "date": 1743171085416,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.651209772708956,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.64080135869565,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 95.16371758975018,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 178.2102770677419,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.22734756311482,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.00879617021276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.99504306844042,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.10158609065394,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.720908976951065,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.959007329787234,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.787346496384473,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.307182109307764,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.857111304738202,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb08d3b328d3da64e14815387e932b4a5e471fb3",
          "message": "fix(deps): update dependency com.squareup.okio:okio to v3.11.0 (#426)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio](https://redirect.github.com/square/okio) |\n`3.10.2` -> `3.11.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio/3.10.2/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio/3.10.2/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio)</summary>\n\n###\n[`v3.11.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3110)\n\n*2025-04-09*\n\n-   Fix: Clear the deflater's byte array reference\n-   New: Faster implementation of `String.decodeHex()` on Kotlin/JS.\n- New: Declare `EXACTLY_ONCE` execution for blocks like `Closeable.use\n{}` and `FileSystem.read {}`.\n-   Upgrade: \\[Kotlin 2.1.20]\\[kotlin\\_2\\_1\\_20].\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzguMCIsInVwZGF0ZWRJblZlciI6IjM5LjIzOC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-09T22:04:12Z",
          "tree_id": "43273ae337fd2252a02f4120ac500c0fb2210e75",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/cb08d3b328d3da64e14815387e932b4a5e471fb3"
        },
        "date": 1744237035636,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.672982475207505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.27925856232877,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.5544695207403,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.74555129064522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.023085996787024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.8843886752809,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.70586740799603,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.317373822143615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.893706077121692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.329529259459456,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.10742585333335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.40599063425384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.96511860000001,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88efc71f7f8d0f7d43cc9987ac79369e668bfc71",
          "message": "fix(deps): update dependency com.squareup.okio:okio-bom to v3.11.0 (#427)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio-bom](https://redirect.github.com/square/okio)\n| `3.10.2` -> `3.11.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio-bom/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio-bom/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio-bom/3.10.2/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio-bom/3.10.2/3.11.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio-bom)</summary>\n\n###\n[`v3.11.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3110)\n\n*2025-04-09*\n\n-   Fix: Clear the deflater's byte array reference\n-   New: Faster implementation of `String.decodeHex()` on Kotlin/JS.\n- New: Declare `EXACTLY_ONCE` execution for blocks like `Closeable.use\n{}` and `FileSystem.read {}`.\n-   Upgrade: \\[Kotlin 2.1.20]\\[kotlin\\_2\\_1\\_20].\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzguMCIsInVwZGF0ZWRJblZlciI6IjM5LjIzOC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-09T22:51:32Z",
          "tree_id": "84f631d0c006fa888e7e3cff477c8f94b4a5e700",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/88efc71f7f8d0f7d43cc9987ac79369e668bfc71"
        },
        "date": 1744239884271,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 128.25056454195675,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.05870976365688,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.47812214265135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 56.459291470588234,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.761600833994237,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.913649325448926,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.68583653344087,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.75656873204761,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.6635816981132,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.10164616915091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.58138640781252,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.60163752386844,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.24023173636364,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43c2794a3347e75d3f1f31b2da42ade48a16013d",
          "message": "chore(deps): update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.8.1 (#422)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx:kotlinx-serialization-json](https://redirect.github.com/Kotlin/kotlinx.serialization)\n| `1.8.0` -> `1.8.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.0/1.8.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.0/1.8.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/kotlinx.serialization\n(org.jetbrains.kotlinx:kotlinx-serialization-json)</summary>\n\n###\n[`v1.8.1`](https://redirect.github.com/Kotlin/kotlinx.serialization/blob/HEAD/CHANGELOG.md#181--2025-03-31)\n\n\\==================\n\nThis release updates Kotlin version to 2.1.20, while also providing\nseveral important improvements\nand bugfixes.\n\n#### Improvements\n\n- Implemented encoding null in key and value of a map in Protobuf\n([#&#8203;2910](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2910))\n- Make type argument in JsonTransformingSerializer nullable\n([#&#8203;2911](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2911))\n- Use SPDX identifier in POMs\n([#&#8203;2936](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2936))\n(thanks to [Leon Linhart](https://redirect.github.com/TheMrMilchmann))\n- Add watchosDeviceArm64 to Okio integration module\n([#&#8203;2920](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2920))\n(thanks to [Daniel Santiago](https://redirect.github.com/danysantiago))\n- Update kotlinx-io version to 0.6.0\n([#&#8203;2933](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2933))\n(thanks to [Piotr Krzemiński](https://redirect.github.com/krzema12))\n\n#### Bugfixes\n\n- Fix incorrect enum coercion during deserialization from JsonElement\n([#&#8203;2962](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2962))\n- Supply proper equals(), hashCode(), and toString() for\nSerialDescriptor() wrapper\n([#&#8203;2942](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2942))\n- Do not encode empty packed collections in protobuf\n([#&#8203;2907](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2907))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMjcuMyIsInVwZGF0ZWRJblZlciI6IjM5LjIyNy4zIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-10T03:18:33Z",
          "tree_id": "4c25fdeaa089fcabe7fef7d54364b7ba1636ab8d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/43c2794a3347e75d3f1f31b2da42ade48a16013d"
        },
        "date": 1744255899523,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.28023939293071,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.952553808609274,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.55774814037635,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.14065074074075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.90088650283252,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.08434507435896,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 144.8099675823598,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.5459594468141,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.72596919946901,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.53586830421053,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.901119097111938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.283972522965904,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.115229251683886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b425e153dfffb11351991f9d271a6c09348980b",
          "message": "chore(deps): update plugin org.gradle.toolchains.foojay-resolver-convention to v0.10.0 (#428)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| org.gradle.toolchains.foojay-resolver-convention | `0.9.0` -> `0.10.0`\n|\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.10.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.10.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.9.0/0.10.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.9.0/0.10.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzguMCIsInVwZGF0ZWRJblZlciI6IjM5LjIzOC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-10T07:59:29Z",
          "tree_id": "7735e1c03298edee65da66e39714998840b936b0",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/5b425e153dfffb11351991f9d271a6c09348980b"
        },
        "date": 1744273036243,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.21202910198384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 103.45661979591837,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.93407778242911,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.24405299767443,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 164.0580588686119,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.05421730350876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.02313676511311,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.67081356391753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.70743199877356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 22.424272879786095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.027175946495888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.47837356369607,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.47331693404256,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fabb75072d42881827d0963346c5e427b09512dd",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.12.2 (#429)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.12.1` ->\n`5.12.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.12.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.12.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.12.1/5.12.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.12.1/5.12.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzguMCIsInVwZGF0ZWRJblZlciI6IjM5LjIzOC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-11T15:58:13Z",
          "tree_id": "b24eecd7332143dcb5bd753d97e318a4af13cbea",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/fabb75072d42881827d0963346c5e427b09512dd"
        },
        "date": 1744387837332,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.88224542891868,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.47563153811878,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.81087674910496,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.0109952638298,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.285690049866183,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.566232900099752,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.583274354736242,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 111.07906642623786,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 206.46466429444445,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.891062189171883,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.158664010738256,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.54300104269564,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 103.21250560000001,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a646797f5f50483e6a1aeb13d58947b56592bc8",
          "message": "fix(deps): update dependency com.google.guava:guava to v33.4.8-jre (#424)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.google.guava:guava](https://redirect.github.com/google/guava) |\n`33.4.6-jre` -> `33.4.8-jre` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.google.guava:guava/33.4.8-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.google.guava:guava/33.4.8-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.google.guava:guava/33.4.6-jre/33.4.8-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.google.guava:guava/33.4.6-jre/33.4.8-jre?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzUuMiIsInVwZGF0ZWRJblZlciI6IjM5LjIzOC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-23T08:15:25+02:00",
          "tree_id": "201e57e790656de99b350fb6c4a20851cb1a263d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4a646797f5f50483e6a1aeb13d58947b56592bc8"
        },
        "date": 1745389827450,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.02102178497737,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.7646486631579,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.466255524718704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.12125457697368,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 155.31715367706093,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.97667026365852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 40.341697429560554,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.75341260531915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.38306959701483,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.88585578743398,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.885578812162157,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.0010810011825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.19930411764707,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b13bd9cf67806e45d0912a5958a7adb00c9bb70",
          "message": "fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-coroutines-core to v1.10.2 (#423)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx:kotlinx-coroutines-core](https://redirect.github.com/Kotlin/kotlinx.coroutines)\n| `1.10.1` -> `1.10.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx:kotlinx-coroutines-core/1.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx:kotlinx-coroutines-core/1.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx:kotlinx-coroutines-core/1.10.1/1.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx:kotlinx-coroutines-core/1.10.1/1.10.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/kotlinx.coroutines\n(org.jetbrains.kotlinx:kotlinx-coroutines-core)</summary>\n\n###\n[`v1.10.2`](https://redirect.github.com/Kotlin/kotlinx.coroutines/blob/HEAD/CHANGES.md#Version-1102)\n\n[Compare\nSource](https://redirect.github.com/Kotlin/kotlinx.coroutines/compare/1.10.1...1.10.2)\n\n- Fixed the `kotlinx-coroutines-debug` JAR file including the\n`module-info.class` file twice, resulting in failures in various tooling\n([#&#8203;4314](https://redirect.github.com/Kotlin/kotlinx.coroutines/issues/4314)).\nThanks, [@&#8203;RyuNen344](https://redirect.github.com/RyuNen344)!\n- Fixed `Flow.stateIn` hanging when the scope is cancelled in advance or\nthe flow is empty\n([#&#8203;4322](https://redirect.github.com/Kotlin/kotlinx.coroutines/issues/4322)).\nThanks,\n[@&#8203;francescotescari](https://redirect.github.com/francescotescari)!\n- Improved handling of dispatcher failures in `.limitedParallelism`\n([#&#8203;4330](https://redirect.github.com/Kotlin/kotlinx.coroutines/issues/4330))\nand during flow collection\n([#&#8203;4272](https://redirect.github.com/Kotlin/kotlinx.coroutines/issues/4272)).\n- Fixed `runBlocking` failing to run its coroutine to completion in some\ncases if its JVM thread got interrupted\n([#&#8203;4399](https://redirect.github.com/Kotlin/kotlinx.coroutines/issues/4399)).\n-   Small tweaks, fixes, and documentation improvements.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yMzUuMiIsInVwZGF0ZWRJblZlciI6IjM5LjIzNS4yIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2025-04-23T08:55:33+02:00",
          "tree_id": "0504d7afb90e3202457aa21cc9daaf3eff9aee63",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9b13bd9cf67806e45d0912a5958a7adb00c9bb70"
        },
        "date": 1745392199701,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 61.4229485001296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 87.1566685090909,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 151.40474851588817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.83117079787235,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.69986482994392,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.961992304166664,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.984285257655735,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.900730354450694,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.391249862250362,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.090894437860904,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.699930078767125,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.24431808146595,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.01455403846155,
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
          "id": "29f87778f6deaea245738506a8d98ccaa264e547",
          "message": "Update latest analyzed commit in snakeyaml-engine (#433)\n\nTo date, these are the changes that need to be ported, and they're all\ntacked as an issue or a PR:\n* https://github.com/krzema12/snakeyaml-engine-kmp/pull/430\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/431\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/432",
          "timestamp": "2025-04-23T19:18:20+02:00",
          "tree_id": "d48a11b6c65878197eefb27ccdc909c26b82f228",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/29f87778f6deaea245738506a8d98ccaa264e547"
        },
        "date": 1745429707153,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.67767690756303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.39722518518519,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 143.3999193067238,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.81567155604256,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.137137109522406,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.67505880540541,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.649920774369388,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.961938844034876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.145977846380468,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.5959529304174,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.958336382550335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.49897176865629,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.69322511290322,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1178e6fdfc650d8e145e27ca2190556c4424b30c",
          "message": "chore(deps): update dependency gradle to v8.14 (#435)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | minor | `8.13`\n-> `8.14` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.14`](https://redirect.github.com/gradle/gradle/compare/v8.13.0...v8.14.0)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.13.0...v8.14.0)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yNTcuMyIsInVwZGF0ZWRJblZlciI6IjM5LjI1Ny4zIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-25T17:17:52Z",
          "tree_id": "2004b7e0f1453e4fb42a62668c44322238e77fe3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1178e6fdfc650d8e145e27ca2190556c4424b30c"
        },
        "date": 1745602622199,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.57368643492555,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.0110569627451,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 42.27557007980776,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.59625933085106,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.78788449944473,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.023659928548653,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.004918298881842,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.82285300233576,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.316035773026314,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.52678288212499,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.0638573076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 60.17408033901042,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 86.1348309189655,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93783bcd3722a0e6383c8bcffa907f91a6dcd470",
          "message": "chore(deps): update plugin com.gradle.develocity to v4.0.1 (#434)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| com.gradle.develocity | `4.0` -> `4.0.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0/4.0.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0/4.0.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yNTcuMyIsInVwZGF0ZWRJblZlciI6IjM5LjI1Ny4zIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-25T23:06:51Z",
          "tree_id": "c91221fc30d27a79b3248e4e92d22d80faefab89",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/93783bcd3722a0e6383c8bcffa907f91a6dcd470"
        },
        "date": 1745623223211,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.555173983038365,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.559579873856215,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 55.793661923849925,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.0992697885246,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.55592229392988,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 128.97613141074672,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 43.44039615530653,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.14555914895833,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.38343796896234,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.301413417166902,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.227761311338206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.23247823772128,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.87629127272727,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d658c1c1428ee552a224a5f3e4c8f3d59d8c17da",
          "message": "fix(deps): update kotlin monorepo to v2.1.21 (#437)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.jetbrains.kotlin:kotlin-gradle-plugin](https://kotlinlang.org/)\n([source](https://redirect.github.com/JetBrains/kotlin)) | `2.1.20` ->\n`2.1.21` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.20/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlin:kotlin-gradle-plugin/2.1.20/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n| [org.jetbrains.kotlin.plugin.allopen](https://kotlinlang.org/)\n([source](https://redirect.github.com/JetBrains/kotlin)) | `2.1.20` ->\n`2.1.21` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.20/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlin.plugin.allopen:org.jetbrains.kotlin.plugin.allopen.gradle.plugin/2.1.20/2.1.21?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>JetBrains/kotlin\n(org.jetbrains.kotlin:kotlin-gradle-plugin)</summary>\n\n###\n[`v2.1.21`](https://redirect.github.com/JetBrains/kotlin/releases/tag/v2.1.21):\nKotlin 2.1.21\n\n##### Changelog\n\n##### Backend. Native. Debug\n\n- [`KT-75991`](https://youtrack.jetbrains.com/issue/KT-75991) Xcode\n16.3: Fix lldb stepping test over an inline function\n\n##### Compiler\n\n- [`KT-75992`](https://youtrack.jetbrains.com/issue/KT-75992) Xcode\n16.3: stacktraces on simulators are not symbolicated\n- [`KT-76663`](https://youtrack.jetbrains.com/issue/KT-76663) KJS:\nKotlinNothingValueException caused by expression return since 2.1.20\n- [`KT-75756`](https://youtrack.jetbrains.com/issue/KT-75756) Backend\nInternal error: Exception during IR lowering when trying to access\nvariable from providedProperties in class within kotlin custom script\n- [`KT-76209`](https://youtrack.jetbrains.com/issue/KT-76209)\nCONFLICTING_UPPER_BOUNDS on `Nothing` bound\n- [`KT-70352`](https://youtrack.jetbrains.com/issue/KT-70352) K2:\nFalse-negative CONFLICTING_UPPER_BOUNDS on `Nothing` bound\n- [`KT-74739`](https://youtrack.jetbrains.com/issue/KT-74739) Native:\n\"IllegalArgumentException: All constructors should've been lowered:\nFUNCTION_REFERENCE\"\n- [`KT-75483`](https://youtrack.jetbrains.com/issue/KT-75483) Native:\nredundant unboxing generated with smart cast\n- [`KT-71425`](https://youtrack.jetbrains.com/issue/KT-71425) IR\nInliner: investigate return type of an inlined block\n\n##### Native\n\n- [`KT-76252`](https://youtrack.jetbrains.com/issue/KT-76252) Native:\nexecutable crash with generic value classes with 2.1.20\n\n##### Native. C and ObjC Import\n\n- [`KT-75781`](https://youtrack.jetbrains.com/issue/KT-75781) Xcode\n16.3: Fix cinterop tests failing with fatal error: could not build\nmodule '\\_stdint'\n\n##### Native. Runtime. Memory\n\n- [`KT-74280`](https://youtrack.jetbrains.com/issue/KT-74280) Native:\nGC.collect crashes with -Xallocator=std\n\n##### Tools. CLI\n\n- [`KT-75588`](https://youtrack.jetbrains.com/issue/KT-75588)\n\\[2.1.20-RC] \"was compiled by a pre-release version of Kotlin and cannot\nbe loaded by this version of the compiler\" warnings despite using the\nsame compiler version\n- [`KT-74663`](https://youtrack.jetbrains.com/issue/KT-74663) kotlinc-js\nCLI: not providing -ir-output-dir results in NullPointerException\n\n##### Tools. Compiler Plugins\n\n- [`KT-76162`](https://youtrack.jetbrains.com/issue/KT-76162)\n\"IllegalStateException: No mapping for symbol: VALUE_PARAMETER\nINSTANCE_RECEIVER\" after updating to 2.1.20\n\n##### Tools. Gradle\n\n- [`KT-73682`](https://youtrack.jetbrains.com/issue/KT-73682)\nCompatibility with Gradle 8.12 release\n- [`KT-73142`](https://youtrack.jetbrains.com/issue/KT-73142) Kotlin\nGradle plugin: Remove usage of Gradle's internal ExecHandleBuilder\n- [`KT-36004`](https://youtrack.jetbrains.com/issue/KT-36004) Update\n'org.gradle.usage' attribute rules to support the 'JAVA_API' and\n'JAVA_RUNTIME' value\n- [`KT-73968`](https://youtrack.jetbrains.com/issue/KT-73968)\nKotlinDependencyManagement tries to mutate configuration after it was\nresolved\n- [`KT-73684`](https://youtrack.jetbrains.com/issue/KT-73684) Run\nintegration tests against Gradle 8.12\n- [`KT-72694`](https://youtrack.jetbrains.com/issue/KT-72694) Accessing\nTask.project during execution is being deprecated in Gradle 8.12\n- [`KT-73683`](https://youtrack.jetbrains.com/issue/KT-73683) Compile\nagainst Gradle API 8.12\n\n##### Tools. Gradle. JS\n\n- [`KT-77119`](https://youtrack.jetbrains.com/issue/KT-77119) KJS:\nGradle: Setting custom environment variables in KotlinJsTest tasks no\nlonger works\n- [`KT-74735`](https://youtrack.jetbrains.com/issue/KT-74735) KGP uses\nGradle internal `CompositeProjectComponentArtifactMetadata`\n- [`KT-71879`](https://youtrack.jetbrains.com/issue/KT-71879) Notice of\nupcoming deprecation for Boolean 'is-' properties in Gradle Groovy\nscripts\n\n##### Tools. Gradle. Multiplatform\n\n- [`KT-75808`](https://youtrack.jetbrains.com/issue/KT-75808) KGP: MPP\nwith jvm target and Gradle java-test-fixtures is broken\n- [`KT-75605`](https://youtrack.jetbrains.com/issue/KT-75605) Dependency\nresolution fails in commonTest/nativeTest source sets for KMP module\nwhen depending on another project due to missing PSM\n- [`KT-75512`](https://youtrack.jetbrains.com/issue/KT-75512)\nMaven-publish: ArtifactId is not correct in`pom` file with customized\n`withXml`\n\n##### Tools. Incremental Compile\n\n- [`KT-62555`](https://youtrack.jetbrains.com/issue/KT-62555) Wrong ABI\nfingerprint for inline function containing a lambda\n- [`KT-75883`](https://youtrack.jetbrains.com/issue/KT-75883) Follow-up:\nswitch from INSTANCE heuristic to outerClass chain\n\n##### Tools. Kapt\n\n- [`KT-75936`](https://youtrack.jetbrains.com/issue/KT-75936) K2 KAPT:\nunsupported FIR element kinds in constant evaluation\n- [`KT-75942`](https://youtrack.jetbrains.com/issue/KT-75942) K2 KAPT:\nunderscore not allowed here\n\n##### Tools. Scripts\n\n- [`KT-76424`](https://youtrack.jetbrains.com/issue/KT-76424)\nDependencies in main.kts not working with 2.1.20\n- [`KT-76296`](https://youtrack.jetbrains.com/issue/KT-76296) Kotlin\nscript compiler crashes when secondary constructor calls a function\n- [`KT-75589`](https://youtrack.jetbrains.com/issue/KT-75589) Scripts:\n\"IndexOutOfBoundsException in\njdk.internal.util.Preconditions.outOfBounds\" when trying to extend a\nclass which uses global variable\n\n##### Tools. Wasm\n\n- [`KT-76161`](https://youtrack.jetbrains.com/issue/KT-76161) Wasm:\n\"export startUnitTests was not found\" after updating to Kotlin 2.1.20\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about these\nupdates again.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xMS45IiwidXBkYXRlZEluVmVyIjoiNDAuMTEuOSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-13T14:24:40Z",
          "tree_id": "2c81ea9e6c4046ffed2b6fa6e14b05eb8dcd52e6",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/d658c1c1428ee552a224a5f3e4c8f3d59d8c17da"
        },
        "date": 1747147153245,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.93154509995867,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.600582120149255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.65078728131235,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.6939565631579,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 71.22741548326688,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.33226666666664,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 152.97166220292655,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 134.4121036311739,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.50314874082799,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.80392131258143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.720212169626667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 36.91205079565385,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.38231462446809,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "590e3d2551ef767ef9e806bd782a8adda371b829",
          "message": "chore(deps): update dependency io.github.typesafegithub:github-workflows-kt to v3.4.0 (#436)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.3.0` -> `3.4.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.4.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/io.github.typesafegithub:github-workflows-kt/3.4.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/io.github.typesafegithub:github-workflows-kt/3.3.0/3.4.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.3.0/3.4.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.4.0`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.4.0):\n3.4.0\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.3.0...v3.4.0)\n\n##### :star: Features\n\n- [add support for windows-2025\nrunner](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/ba1f620bef958012081bcd12734e1fc315da5859)\n- [allow accessing base_ref in Kotlin-based\nsteps](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/235f706f464809cdcba94feb525614b4779f325d)\n\n##### :hammer_and_wrench: Fixes\n\n- [do not check if .git is a\ndir](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/066eefb21f75380a7088c31451182dd4c85f0d5d)\n\n##### :bomb: Breaking changes\n\nNone.\n\n##### :package: Dependencies\n\n- [update dependency org.jetbrains.kotlinx:kotlinx-serialization-core to\nv1.8.1](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/10ee31ff1e479d1704aa6f6206c0d42ee76397d7)\n- [update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to\nv1.8.1](https://redirect.github.com/typesafegithub/github-workflows-kt/commit/c560b03991119fbba6173b1a1af82a02dab1dce8)\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.3.0...v3.4.0\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiIzOS4yNjQuMCIsInVwZGF0ZWRJblZlciI6IjM5LjI2NC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-13T19:36:45Z",
          "tree_id": "8bbd3d1bfe2a252d6cabc98c021385eaf8dff09d",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/590e3d2551ef767ef9e806bd782a8adda371b829"
        },
        "date": 1747165521628,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 55.09266310606313,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 91.28962294629628,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 155.6211503898956,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 126.80897039141436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.850401183868577,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.995085892758233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.564492034632716,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.33277279143414,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.69989754210526,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.93094646651586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.44254999999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.968688899851326,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.71903539831932,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b35012cc1bbedbd45c918b0fa48ef10a125ec29f",
          "message": "fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-benchmark-runtime to v0.4.14 (#439)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx:kotlinx-benchmark-runtime](https://redirect.github.com/Kotlin/kotlinx-benchmark)\n| `0.4.13` -> `0.4.14` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx:kotlinx-benchmark-runtime/0.4.14?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx:kotlinx-benchmark-runtime/0.4.14?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx:kotlinx-benchmark-runtime/0.4.13/0.4.14?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx:kotlinx-benchmark-runtime/0.4.13/0.4.14?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/kotlinx-benchmark\n(org.jetbrains.kotlinx:kotlinx-benchmark-runtime)</summary>\n\n###\n[`v0.4.14`](https://redirect.github.com/Kotlin/kotlinx-benchmark/blob/HEAD/CHANGELOG.md#0414)\n\n- Fixed various issues specific to Kotlin/JS projects\n[#&#8203;292](https://redirect.github.com/Kotlin/kotlinx-benchmark/pull/292)\n- Added benchmark name validation for JVM\n[#&#8203;304](https://redirect.github.com/Kotlin/kotlinx-benchmark/pull/304)\n-   Various build infrastructure updates\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xMS45IiwidXBkYXRlZEluVmVyIjoiNDAuMTEuOSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T23:46:13Z",
          "tree_id": "c93af45bb8f6d0211cec0b81add52153b6577d39",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b35012cc1bbedbd45c918b0fa48ef10a125ec29f"
        },
        "date": 1747267337679,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 152.72420763714956,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.35652289121212,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.89033762842167,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.018966299029124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.746287457146245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 29.886731645079703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 22.877774257224196,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.89840296519619,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.105464384347826,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.11902762752767,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 102.82235176470587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.39981147440246,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 88.12754392857141,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f40120aabfe7ca5a7f1dd1862477bb86ef3e461",
          "message": "chore(deps): update plugin org.gradle.toolchains.foojay-resolver-convention to v1 (#440)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| org.gradle.toolchains.foojay-resolver-convention | `0.10.0` -> `1.0.0`\n|\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/1.0.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/1.0.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.10.0/1.0.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.gradle.toolchains.foojay-resolver-convention:org.gradle.toolchains.foojay-resolver-convention.gradle.plugin/0.10.0/1.0.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xNi4wIiwidXBkYXRlZEluVmVyIjoiNDAuMTYuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-19T20:32:37Z",
          "tree_id": "70e0929bfe4673b27fb9d9738b13432e1944d16b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4f40120aabfe7ca5a7f1dd1862477bb86ef3e461"
        },
        "date": 1747687697897,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 146.00222020026874,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 122.83405324418182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.45607376739544,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.46106469117971,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.394853562593084,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.30421422756649,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.61597374897959,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 71.02311125078566,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.66796166666667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.120683242540185,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.59187599673913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 89.91190493014746,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 159.0718131818182,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5649afb756c58db430e3df6b0f4bab8f623d0597",
          "message": "chore(deps): update dependency gradle to v8.14.1 (#441)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | patch | `8.14`\n-> `8.14.1` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.14.1`](https://redirect.github.com/gradle/gradle/compare/v8.14.0...v8.14.1)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.14.0...v8.14.1)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xNi4wIiwidXBkYXRlZEluVmVyIjoiNDAuMTYuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-22T20:10:19Z",
          "tree_id": "4fcaf154c8db4c8cf15c3953d1eb79e7542bec64",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/5649afb756c58db430e3df6b0f4bab8f623d0597"
        },
        "date": 1747945428478,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.461120479776483,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.022997727972026,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.0072571356008,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.84200711234044,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.42659755297127,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.670149959451116,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.41288920289687,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 39.98829389235621,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.649470783333335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.16075342441869,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.90438782258065,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.8352622928366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.47573307692308,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8100fbc5b72702e1f861d6ed4147e667490b7eb",
          "message": "fix(deps): update dependency com.squareup.okio:okio-bom to v3.12.0 (#444)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio-bom](https://redirect.github.com/square/okio)\n| `3.11.0` -> `3.12.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio-bom/3.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio-bom/3.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio-bom/3.11.0/3.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio-bom/3.11.0/3.12.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio-bom)</summary>\n\n###\n[`v3.12.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3120)\n\n*2025-05-27*\n\n- New: Support an optional end index when searching with\n`BufferedSource.indexOf()`.\n-   Fix: Don't do unnecessary work in `BufferedSource.rangeEquals()`.\n-   Upgrade: \\[Kotlin 2.1.21]\\[kotlin\\_2\\_1\\_21].\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xNi4wIiwidXBkYXRlZEluVmVyIjoiNDAuMTYuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-27T23:47:13Z",
          "tree_id": "db396a391af65832a70332763f2ed204f73aee7c",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e8100fbc5b72702e1f861d6ed4147e667490b7eb"
        },
        "date": 1748390310577,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.92381087016194,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.05968519230768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.6157645883147,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.89800246190475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.13527976851571,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 38.01289723138686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 138.02654635895905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.21361880784313,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.255260510851876,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.125000353413036,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.364202756271562,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.73340824023208,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.142542964383566,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9081418639a048a66eec63991becfcddbb2abe5b",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.13.0 (#445)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.12.2` ->\n`5.13.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.13.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.13.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.12.2/5.13.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.12.2/5.13.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4zMy42IiwidXBkYXRlZEluVmVyIjoiNDAuMzMuNiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-30T11:05:00Z",
          "tree_id": "86a7e68656f910891a07ff73891d468e17eb6f54",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/9081418639a048a66eec63991becfcddbb2abe5b"
        },
        "date": 1748603649303,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.26776596194802,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.41280346153846,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 29.689180624050188,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.053034560256414,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.8932401024754,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.70371206818183,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.13186057430091,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 22.720299053776703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.337473351238959,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.663999850073104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.06553734925374,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.480968731198416,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 82.51295550333333,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "850eccc2921cf2de301c8f0c2d9f324c2f0225bd",
          "message": "chore(deps): update dependency gradle to v8.14.2 (#446)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | patch | `8.14.1`\n-> `8.14.2` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.14.2`](https://redirect.github.com/gradle/gradle/compare/v8.14.1...v8.14.2)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.14.1...v8.14.2)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC40MC4zIiwidXBkYXRlZEluVmVyIjoiNDAuNDAuMyIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-05T16:44:37Z",
          "tree_id": "333918ff4194c1da29ae76b56f52ac1f58a2273b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/850eccc2921cf2de301c8f0c2d9f324c2f0225bd"
        },
        "date": 1749142801004,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.01521537309763,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.12933602459016,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 30.789256839860847,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.85090237468354,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.84993517174648,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.9515724,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 164.30756016567761,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.2438824310145,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.703077551402384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.89664589227126,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.39988625500282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 44.539008722530745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.70586177659574,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14c280f9fc00f77990a12b5ce3cd3bb486c7249b",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.13.1 (#447)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/junit5/)\n([source](https://redirect.github.com/junit-team/junit5)) | `5.13.0` ->\n`5.13.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.13.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.13.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.13.0/5.13.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.13.0/5.13.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC40MC4zIiwidXBkYXRlZEluVmVyIjoiNDAuNDAuMyIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-07T10:08:28Z",
          "tree_id": "3848417bb8e366d01762ec9691e050acd27d8558",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/14c280f9fc00f77990a12b5ce3cd3bb486c7249b"
        },
        "date": 1749291690745,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.748266948229855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.87588541607143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 56.837841767029055,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.26455834230768,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 151.6777291950041,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.64344401558442,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.05672191122625,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.35433591564117,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.67003993703623,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.119700841411216,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.88748766979167,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.4028686393124,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.3256475,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af920a38d8da4eac66123e0fe35e4ac6b8e180ac",
          "message": "chore(deps): update plugin com.gradle.develocity to v4.0.2 (#442)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| com.gradle.develocity | `4.0.1` -> `4.0.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.1/4.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.1/4.0.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC4xNi4wIiwidXBkYXRlZEluVmVyIjoiNDAuMTYuMCIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-22T11:30:28+02:00",
          "tree_id": "aa46a38d191ce7a7db0db0f5ed667cccede624d7",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/af920a38d8da4eac66123e0fe35e4ac6b8e180ac"
        },
        "date": 1750585426440,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.88716550359909,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.1567348076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.549603061819596,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 80.20184343593749,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.847894958004417,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.14561513333333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.041874853831146,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 28.184652968574845,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.714300191296147,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.88022935577476,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.80277628093643,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.64026112220917,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.95126760555556,
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
          "id": "a56da5607b5ff30d12c44ac635663a0ac00309e8",
          "message": "Update latest analyzed commit (#455)\n\nSee\nhttps://raw.githubusercontent.com/krzema12/snakeyaml-engine-kmp/refs/heads/commits-to-upstream-badge/log-diff-between-repos.txt\n\nI created these issues to track changes worth porting:\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/450\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/451\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/452\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/453\n* https://github.com/krzema12/snakeyaml-engine-kmp/issues/454",
          "timestamp": "2025-06-22T12:09:22+02:00",
          "tree_id": "ca2129d03bd0a0455343c35286fafd2d8f0364b3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/a56da5607b5ff30d12c44ac635663a0ac00309e8"
        },
        "date": 1750587478718,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.31714655362255,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.30880788461539,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.13084466988287,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.67449157460317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 20.89448542073065,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.356809932064472,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.998484564519117,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 147.34754160718143,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 120.0886797329553,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.94149352183547,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.54163011313132,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.157048729781998,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.187804249,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8372266eb3718c61f79f7bd99b01f10f59f801cc",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.13.2 (#457)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/)\n([source](https://redirect.github.com/junit-team/junit-framework)) |\n`5.13.1` -> `5.13.2` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.13.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.junit.jupiter:junit-jupiter-engine/5.13.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.junit.jupiter:junit-jupiter-engine/5.13.1/5.13.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.13.1/5.13.2?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDAuNjIuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-24T19:56:04Z",
          "tree_id": "45748855ca950969fd0e964b1183ea1be6319ea3",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8372266eb3718c61f79f7bd99b01f10f59f801cc"
        },
        "date": 1750795607887,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.62244093723106,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.41238222222223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 76.57840473514271,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 102.80549491698113,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.450625263279726,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.56378185347938,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.342959804501595,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 145.6001730624758,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.49694327962963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.50926188053163,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.05427106391753,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.50981633514923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.51901941111111,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b70a1f7c8c4af85389bef08e60c89c9ab61343f",
          "message": "chore(deps): update plugin org.jetbrains.kotlinx.binary-compatibility-validator to v0.18.0 (#458)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx.binary-compatibility-validator](https://redirect.github.com/Kotlin/binary-compatibility-validator)\n| `0.17.0` -> `0.18.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.18.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.18.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.17.0/0.18.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.17.0/0.18.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/binary-compatibility-validator\n(org.jetbrains.kotlinx.binary-compatibility-validator)</summary>\n\n###\n[`v0.18.0`](https://redirect.github.com/Kotlin/binary-compatibility-validator/releases/tag/0.18.0)\n\n[Compare\nSource](https://redirect.github.com/Kotlin/binary-compatibility-validator/compare/0.17.0...0.18.0)\n\n#### What's Changed\n\n- Supported KLIB cross compilation enabled in Kotlin 2.1.0\n[#&#8203;299](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/299)\n- Fixed issue with early properties evaluation\n[#&#8203;286](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/286)\n- Started excluding local classes created by Parcelize\n[#&#8203;300](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/300)\n\nThanks to\n[@&#8203;TheMrMilchmann](https://redirect.github.com/TheMrMilchmann),\n[@&#8203;osipxd](https://redirect.github.com/osipxd), and\n[@&#8203;Goooler](https://redirect.github.com/Goooler) for their\ncontributions!\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDAuNjIuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-25T12:15:48Z",
          "tree_id": "f1e3c09e8c6e2d0b3dfefb3819f03db8bd1fdaa5",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/3b70a1f7c8c4af85389bef08e60c89c9ab61343f"
        },
        "date": 1750854312219,
        "tool": "jmh",
        "benches": [
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.316563406452754,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.78047010324429,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.208746332761104,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.99227400418536,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 131.36030207252014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.40230475643136,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.32694000229884,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 27.134566113549557,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.62407346886793,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.28360099574226,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.64413800000001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.851383144193804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 81.76807418387097,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93ce7427f472fba69ff065aaf4a98a85b225c528",
          "message": "chore(deps): update dependency org.jetbrains.kotlinx:kotlinx-serialization-json to v1.9.0 (#459)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n|\n[org.jetbrains.kotlinx:kotlinx-serialization-json](https://redirect.github.com/Kotlin/kotlinx.serialization)\n| `1.8.1` -> `1.9.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.1/1.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx:kotlinx-serialization-json/1.8.1/1.9.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/kotlinx.serialization\n(org.jetbrains.kotlinx:kotlinx-serialization-json)</summary>\n\n###\n[`v1.9.0`](https://redirect.github.com/Kotlin/kotlinx.serialization/blob/HEAD/CHANGELOG.md#190--2025-06-27)\n\n\\==================\n\nThis release updates Kotlin version to 2.2.0, includes several bugfixes\nand provides serializers for kotlin.time.Instant.\n\n#### Add kotlin.time.Instant serializers\n\nInstant class was moved from kotlinx-datetime library to Kotlin standard\nlibrary.\nAs a result, kotlinx-datetime 0.7.0 no longer has serializers for the\nInstant class.\nTo use new kotlin.time.Instant class in your\n[@&#8203;Serializable](https://redirect.github.com/Serializable)\nclasses,\nyou can use this 1.9.0 kotlinx-serialization version (Kotlin 2.2 is\nrequired).\nYou can choose between default `InstantSerializer` which uses its string\nrepresentation,\nor specify `InstantComponentSerializer` that represents instant as its\ncomponents.\nSee details in the\n[PR](https://redirect.github.com/Kotlin/kotlinx.serialization/pull/2945).\n\n#### Other bugfixes\n\n- Fix resize in JsonPath\n([#&#8203;2995](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2995))\n- Fixed proguard rules for obfuscation to work correctly\n([#&#8203;2983](https://redirect.github.com/Kotlin/kotlinx.serialization/issues/2983))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDAuNjIuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-27T21:39:44Z",
          "tree_id": "7fe8adbb487624a9dcbe80a268820a1a3d878a4b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/93ce7427f472fba69ff065aaf4a98a85b225c528"
        },
        "date": 1751061081549,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 71.155879010292,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.95510057692309,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.89897537068572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 102.5753616,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 157.25569988478853,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.37881056835568,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 42.97174940906555,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.912613428155346,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.171184490039888,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.473415902745124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.99614940373136,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.717653803905787,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.12761182903226,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4b0a6cfeb2f3a4e58e32efa676eeb2ecd22b8bf",
          "message": "fix(deps): update dependency com.squareup.okio:okio-bom to v3.14.0 (#461)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio-bom](https://redirect.github.com/square/okio)\n| `3.13.0` -> `3.14.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio-bom/3.14.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio-bom/3.14.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio-bom/3.13.0/3.14.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio-bom/3.13.0/3.14.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio-bom)</summary>\n\n###\n[`v3.14.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3140)\n\n*2025-06-28*\n\n- Upgrade: \\[kotlinx-datetime 0.7.0]\\[datetime\\_0\\_7\\_0]. This impacts\nthe `okio-fakefilesystem`\nartifact only. This is a binary-incompatible backwards-incompatible\nchange that cannot co-exist\nwith previous releases of `okio-fakefilesystem`! If you observe a\n`NoSuchMethodError` calling\n`FakeFileSystem.init`, update the calling code to this release (or\nnewer) and recompile. We don't\nlike imposing backwards-incompatible changes like this on you and do so\nregretfully.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDAuNjIuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-28T18:50:59Z",
          "tree_id": "2a328f2d1b55ebe90d0ce490e621e9e3e5c788b8",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/b4b0a6cfeb2f3a4e58e32efa676eeb2ecd22b8bf"
        },
        "date": 1751137373459,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 154.62898698215355,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.17586364763275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.97213128556115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.31474844787233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.905231090964886,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.647635060716972,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.695359203973123,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 59.61085351221332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.25527506610169,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.29891655311945,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.76308886792454,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.61506701207502,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.75473363708609,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1258c89f1128c834bebdbdffb6edf0f7f2deccdc",
          "message": "fix(deps): update dependency com.squareup.okio:okio to v3.15.0 (#462)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Adoption | Passing | Confidence |\n|---|---|---|---|---|---|\n| [com.squareup.okio:okio](https://redirect.github.com/square/okio) |\n`3.14.0` -> `3.15.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![adoption](https://developer.mend.io/api/mc/badges/adoption/maven/com.squareup.okio:okio/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![passing](https://developer.mend.io/api/mc/badges/compatibility/maven/com.squareup.okio:okio/3.14.0/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio/3.14.0/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio)</summary>\n\n###\n[`v3.15.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3150)\n\n*2025-07-01*\n\n- Upgrade: \\[kotlinx-datetime\n0.7.0-0.6.x-compat]\\[datetime\\_0\\_7\\_0\\_compat]. The previous 3.14.0\nrelease, `FakeFileSystem` broke binary-compatibility for calls to\n`FakeFileSystem()`. This\n  restores that compatibility.\n\n- Breaking: Change `FakeFileSystem.clock` from a JVM field to a\nproperty. This avoids a crash\nrunning Okio in a Gradle 8.x plugin. This change is not\nbinary-compatible.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDAuNjIuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-02T04:39:51Z",
          "tree_id": "eb8bc7b7c24e4ad872c8075393c6a488823a2546",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1258c89f1128c834bebdbdffb6edf0f7f2deccdc"
        },
        "date": 1751431681465,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.65106713057715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 58.63440089085932,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.47572767608695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 134.38092150184517,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.15054543557991,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.444027680354736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.90419302127659,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.181133140299213,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.609815192558465,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.228919785881025,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.996354128600018,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.058063860544216,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bde21ce1d150246bd5e3627195b279d45f103b82",
          "message": "fix(deps): update dependency com.squareup.okio:okio-bom to v3.15.0 (#463)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n| [com.squareup.okio:okio-bom](https://redirect.github.com/square/okio)\n| `3.14.0` -> `3.15.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.squareup.okio:okio-bom/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.squareup.okio:okio-bom/3.14.0/3.15.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>square/okio (com.squareup.okio:okio-bom)</summary>\n\n###\n[`v3.15.0`](https://redirect.github.com/square/okio/blob/HEAD/CHANGELOG.md#Version-3150)\n\n*2025-07-01*\n\n- Upgrade: \\[kotlinx-datetime\n0.7.0-0.6.x-compat]\\[datetime\\_0\\_7\\_0\\_compat]. The previous 3.14.0\nrelease, `FakeFileSystem` broke binary-compatibility for calls to\n`FakeFileSystem()`. This\n  restores that compatibility.\n\n- Breaking: Change `FakeFileSystem.clock` from a JVM field to a\nproperty. This avoids a crash\nrunning Okio in a Gradle 8.x plugin. This change is not\nbinary-compatible.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MC42Mi4xIiwidXBkYXRlZEluVmVyIjoiNDEuMTcuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-02T16:23:49Z",
          "tree_id": "af707dc3a540c3327a3685afde8208a76ae2e3f2",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/bde21ce1d150246bd5e3627195b279d45f103b82"
        },
        "date": 1751473956933,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.38071631540698,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.47663677800001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.9870145101462,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.56203754716981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.15881793698443,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 93.4993270037037,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 138.67070228007105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 121.84983316862744,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.57166765135222,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.189167256701026,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.370230231582905,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.532360365189625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.828290755454665,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82201cfd23efa9b5355c94ca31e3a6236a0ec771",
          "message": "chore(deps): update dependency io.github.typesafegithub:github-workflows-kt to v3.5.0 (#464)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n|\n[io.github.typesafegithub:github-workflows-kt](https://redirect.github.com/typesafegithub/github-workflows-kt)\n| `3.4.0` -> `3.5.0` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.typesafegithub:github-workflows-kt/3.5.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.typesafegithub:github-workflows-kt/3.4.0/3.5.0?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>typesafegithub/github-workflows-kt\n(io.github.typesafegithub:github-workflows-kt)</summary>\n\n###\n[`v3.5.0`](https://redirect.github.com/typesafegithub/github-workflows-kt/releases/tag/v3.5.0):\n3.5.0\n\n[Compare\nSource](https://redirect.github.com/typesafegithub/github-workflows-kt/compare/v3.4.0...v3.5.0)\n\n##### :star: Features\n\nTODO\n\n##### :hammer\\_and\\_wrench: Fixes\n\nTODO\n\n##### :bomb: Breaking changes\n\nTODO\n\n##### :package: Dependencies\n\nTODO\n\n***\n\nThe above release notes include customer-facing changes.\nIf you're interested also in internal changes, please see the full\nchange log:\nhttps://github.com/typesafegithub/github-workflows-kt/compare/v3.4.0...v3.5.0\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4xNy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMTcuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-04T11:22:58Z",
          "tree_id": "29e967bfd9b1a23dd41d9f900ad8a8eae57a0149",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/82201cfd23efa9b5355c94ca31e3a6236a0ec771"
        },
        "date": 1751628687922,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 148.04530740205485,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 119.9282356056547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 56.55788016908258,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.78492989595959,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.57085221377029,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.09193321319056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.565463496015898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.38618851272152,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 97.28330423076923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.20585578343785,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 77.38346276615383,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.102817560802674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.477465034459456,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc011516b114c4fecf18ec8ac651cabf375b35a1",
          "message": "chore(deps): update dependency gradle to v8.14.3 (#465)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | patch | `8.14.2`\n-> `8.14.3` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v8.14.3`](https://redirect.github.com/gradle/gradle/releases/tag/v8.14.3):\n8.14.3\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.14.2...v8.14.3)\n\nThe Gradle team is excited to announce Gradle 8.14.3.\n\nThis is a patch release for 8.14. We recommend using 8.14.3 instead of\n8.14.\n\nHere are the highlights of this release:\n\n- Java 24 support\n- GraalVM Native Image toolchain selection\n- Enhancements to test reporting\n- Build Authoring improvements\n\n[Read the Release\nNotes](https://docs.gradle.org/8.14.3/release-notes.html)\n\nWe would like to thank the following community members for their\ncontributions to this release of Gradle:\n[Aurimas](https://redirect.github.com/liutikas),\n[Ben Bader](https://redirect.github.com/benjamin-bader),\n[Björn Kautler](https://redirect.github.com/Vampire),\n[chandre92](https://redirect.github.com/chandre92),\n[Daniel Hammer](https://redirect.github.com/dlehammer),\n[Danish Nawab](https://redirect.github.com/danishnawab),\n[Florian Dreier](https://redirect.github.com/DreierF),\n[Ivy Chen](https://redirect.github.com/Mengmeiivy),\n[Jendrik Johannes](https://redirect.github.com/jjohannes),\n[jimmy1995-gu](https://redirect.github.com/jimmy1995-gu),\n[Madalin Valceleanu](https://redirect.github.com/vmadalin),\n[Na Minhyeok](https://redirect.github.com/NaMinhyeok).\n\n#### Upgrade instructions\n\nSwitch your build to use Gradle 8.14.3 by updating your wrapper:\n\n```\n./gradlew wrapper --gradle-version=8.14.3 && ./gradlew wrapper\n```\n\nSee the Gradle [8.x upgrade\nguide](https://docs.gradle.org/8.14.3/userguide/upgrading_version_8.html)\nto learn about deprecations, breaking changes and other considerations\nwhen upgrading.\n\nFor Java, Groovy, Kotlin and Android compatibility, see the [full\ncompatibility\nnotes](https://docs.gradle.org/8.14.3/userguide/compatibility.html).\n\n#### Reporting problems\n\nIf you find a problem with this release, please file a bug on [GitHub\nIssues](https://redirect.github.com/gradle/gradle/issues) adhering to\nour issue guidelines.\nIf you're not sure you're encountering a bug, please use the\n[forum](https://discuss.gradle.org/c/help-discuss).\n\nWe hope you will build happiness with Gradle, and we look forward to\nyour feedback via [Twitter](https://twitter.com/gradle) or on\n[GitHub](https://redirect.github.com/gradle).\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4xNy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMTcuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-04T16:33:16Z",
          "tree_id": "9e9e61b86f82794c69f914935f6c203ebd4f5cd4",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/dc011516b114c4fecf18ec8ac651cabf375b35a1"
        },
        "date": 1751647604636,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.65821692251145,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 43.056575438815784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 156.72134342134825,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.5677803697318,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 45.32649271790358,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.88451644761905,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.546778296929563,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.621768804024157,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.244928261601864,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.03675060016724,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.0779479245283,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 55.57730373314538,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 79.7130292046875,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bb1e28184d47d571bdbdc91f8e0bc27c147f2e8",
          "message": "chore(deps): update plugin org.jetbrains.kotlinx.binary-compatibility-validator to v0.18.1 (#468)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n|\n[org.jetbrains.kotlinx.binary-compatibility-validator](https://redirect.github.com/Kotlin/binary-compatibility-validator)\n| `0.18.0` -> `0.18.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.18.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin/0.18.0/0.18.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>Kotlin/binary-compatibility-validator\n(org.jetbrains.kotlinx.binary-compatibility-validator)</summary>\n\n###\n[`v0.18.1`](https://redirect.github.com/Kotlin/binary-compatibility-validator/releases/tag/0.18.1)\n\n[Compare\nSource](https://redirect.github.com/Kotlin/binary-compatibility-validator/compare/0.18.0...0.18.1)\n\n#### What's Changed\n\n- Fixed a bug preventing use of cross-compilation support during KLIB\ndump validation\n\\[[#&#8203;304](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/304)]\\[[#&#8203;306](https://redirect.github.com/Kotlin/binary-compatibility-validator/issues/306)]\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4yMy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMjMuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-10T02:57:16Z",
          "tree_id": "ec581eaae14c1a90f3b4e6abba911abc11f211a6",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/1bb1e28184d47d571bdbdc91f8e0bc27c147f2e8"
        },
        "date": 1752116919601,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.98218719610334,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 83.02696823220339,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.36453614293507,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 96.99424480769231,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 37.67038878151651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 68.21182345428572,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.50401545794358,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.62860574318182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 35.62809760428941,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.23791836458334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.53076521011102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.17070380267281,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.78103402004999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b5c5867b08508646c3768bf0026d17d7f732666",
          "message": "chore(deps): update plugin com.gradle.develocity to v4.1 (#470)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n| com.gradle.develocity | `4.0.2` -> `4.1` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/com.gradle.develocity:com.gradle.develocity.gradle.plugin/4.0.2/4.1?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4yMy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMjMuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-15T18:25:38Z",
          "tree_id": "bdf87cb32321885cec80193631f7153c82008123",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4b5c5867b08508646c3768bf0026d17d7f732666"
        },
        "date": 1752604883455,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.99674302253463,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 108.54160720985651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 204.87260799583333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 141.29276210075267,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.77106211539233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 25.204710075806478,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 29.095440367729218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.017566367655352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.48367275599817,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 57.04572407926829,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 34.685459739748225,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 73.54393407258064,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "767e000d22d8192d88ab45d2f5ea5b49a56d3751",
          "message": "fix(deps): update dependency io.github.java-diff-utils:java-diff-utils to v4.16 (#467)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n|\n[io.github.java-diff-utils:java-diff-utils](https://redirect.github.com/java-diff-utils/java-diff-utils)\n| `4.15` -> `4.16` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/io.github.java-diff-utils:java-diff-utils/4.16?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/io.github.java-diff-utils:java-diff-utils/4.15/4.16?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4xNy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMTcuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-15T22:30:53+02:00",
          "tree_id": "da773dd16139fdc2286f141c4a2b63163549c6a0",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/767e000d22d8192d88ab45d2f5ea5b49a56d3751"
        },
        "date": 1752612152824,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.6019641282786,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.64314461538461,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 31.25996468856398,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.50354081282052,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 160.8392852840432,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.88123196181816,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.979724107695674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.175549902563954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.620050277665975,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 48.421657683300715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.79970825,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.29249555264973,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.72775045952379,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f2608efeac07a06f91a7761304d33af5b033606",
          "message": "fix(deps): update dependency org.snakeyaml:snakeyaml-engine to v2.10 (#469)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n|\n[org.snakeyaml:snakeyaml-engine](https://bitbucket.org/snakeyaml/snakeyaml-engine/src)\n| `2.9` -> `2.10` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.snakeyaml:snakeyaml-engine/2.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.snakeyaml:snakeyaml-engine/2.9/2.10?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4yMy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMjMuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-15T21:01:00Z",
          "tree_id": "ecab7f1e775bafa54a831433394bb125e748225f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/0f2608efeac07a06f91a7761304d33af5b033606"
        },
        "date": 1752613837852,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 153.20824935982142,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 120.43474735957662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.12915668593508,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.042978169966933,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 14.756713195144282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.81396096837019,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.025506029999995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 71.09736568652231,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 108.80069229166668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 27.221111433392622,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 54.958889691752574,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 87.84164015035877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 189.27544405813953,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6cbb5409884a1b52d052728c9e70835ab0a695c",
          "message": "fix(deps): update dependency org.junit.jupiter:junit-jupiter-engine to v5.13.4 (#471)\n\nThis PR contains the following updates:\n\n| Package | Change | Age | Confidence |\n|---|---|---|---|\n| [org.junit.jupiter:junit-jupiter-engine](https://junit.org/)\n([source](https://redirect.github.com/junit-team/junit-framework)) |\n`5.13.3` -> `5.13.4` |\n[![age](https://developer.mend.io/api/mc/badges/age/maven/org.junit.jupiter:junit-jupiter-engine/5.13.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n[![confidence](https://developer.mend.io/api/mc/badges/confidence/maven/org.junit.jupiter:junit-jupiter-engine/5.13.3/5.13.4?slim=true)](https://docs.renovatebot.com/merge-confidence/)\n|\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>junit-team/junit-framework\n(org.junit.jupiter:junit-jupiter-engine)</summary>\n\n###\n[`v5.13.4`](https://redirect.github.com/junit-team/junit-framework/compare/r5.13.3...r5.13.4)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS4yMy4yIiwidXBkYXRlZEluVmVyIjoiNDEuMjMuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-21T12:02:52Z",
          "tree_id": "7cc68241b19ac8101971f399c1fc6309d0d9fbf4",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e6cbb5409884a1b52d052728c9e70835ab0a695c"
        },
        "date": 1753100108059,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.146231744602503,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.39978596838709,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.59809374365054,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 120.74125506234782,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.820242487093484,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 23.680685527864284,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.00573045787911,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.60339586440946,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.253506440206195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 57.886643328191745,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 78.41351832769232,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.41109873931562,
            "unit": "us/op",
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
          "id": "e8bb037ee2560ba21fca0635e49751e7163ed63c",
          "message": "Delete unused git branch publishing convention (#473)\n\nIt seems to be unused. We use Maven snapshots instead.",
          "timestamp": "2025-07-27T16:07:04+02:00",
          "tree_id": "e4ceb307ad7d712b2c215ba33460af46a52f7ef9",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e8bb037ee2560ba21fca0635e49751e7163ed63c"
        },
        "date": 1753625926848,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.7213725558441,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 114.55654402631578,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 148.1648991274262,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 133.2596914128015,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.508874854203814,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 28.748391889219352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 19.551093700135276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.07537456610498,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 64.12231661578946,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.95774353246179,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.28407566037734,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 25.93178520593449,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 63.636827965384626,
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
          "id": "99d2785394e4da7018b4435e87b901eda0162667",
          "message": "Fix publishing by migrating to com.vanniktech.maven.publish Gradle plugin (#479)\n\nPart of https://github.com/krzema12/snakeyaml-engine-kmp/issues/472.\n\n# Testing\n\nTested by enabled snapshot publishing from this branch, see\nhttps://github.com/krzema12/snakeyaml-engine-kmp/actions/runs/16643981599/job/47100135415.",
          "timestamp": "2025-07-31T11:50:43+02:00",
          "tree_id": "28909e73269391a412063e18e6ea2e83b6d2c33b",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/99d2785394e4da7018b4435e87b901eda0162667"
        },
        "date": 1753956210615,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.67036649015748,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 52.24328635321101,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 82.54164725790648,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.9282231787879,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.01844565727066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.49726002708803,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.766027660548435,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.106702702348848,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 21.2125174582662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 53.790144332338215,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.161232092857134,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.87646372640783,
            "unit": "us/op",
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
          "id": "7e196de3fdf1fda1c3ebcadcfedb7bb4955cfd49",
          "message": "Move all dependencies to Gradle version catalog (#480)\n\nFor the sake of easier management of versions, and to make automatic\nversion bumps easier.",
          "timestamp": "2025-07-31T14:19:00+02:00",
          "tree_id": "57612c04fa7a950d177544df7803382ca30f9479",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/7e196de3fdf1fda1c3ebcadcfedb7bb4955cfd49"
        },
        "date": 1753965457163,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.67080751402781,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 95.71373692307692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.30418552596889,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 123.10999471800001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 157.43050446177375,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.70492434175475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 21.047274377025957,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.29209848385592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.63933917630778,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 49.50517497974492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 57.982132291250004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.89887976481581,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 46.08111327433629,
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
          "id": "13a7d519148133cc2f9df7a0db72de2d774e68b0",
          "message": "Remove explicit dependency on urlencoder-lib in benchmark project (#483)\n\nThanks to https://github.com/Kotlin/kotlinx-benchmark/pull/292, we don't\nhave to specify this transitive dependency anymore.",
          "timestamp": "2025-07-31T16:02:52+02:00",
          "tree_id": "ac3519c1c21dfb336af7f633c101b8807e5e5fac",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/13a7d519148133cc2f9df7a0db72de2d774e68b0"
        },
        "date": 1753971162356,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.01309935365475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.96944113636364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 62.08847290350318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 105.51300600535714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 132.34750424593238,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.50888513804898,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 26.637748840155286,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.42191997617922,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.381626828489395,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 52.769307762428085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.26080296129031,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 20.535107809089464,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 33.10535161578947,
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
          "id": "ca6c4b82156667a63c0186436ffac854f56b5df1",
          "message": "Remove unused vals with Java versions (#488)\n\nThese are unused and were never used (were added in\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/255 already as\nunused).\n\nDetails:\n* `javaCompiler` - this version is in fact defined here:\nhttps://github.com/krzema12/snakeyaml-engine-kmp/blob/13a7d519148133cc2f9df7a0db72de2d774e68b0/buildSrc/src/main/kotlin/buildsrc/conventions/lang/kotlin-multiplatform.gradle.kts#L31\n* `javaTestLauncher` was probably intended to be used here:\nhttps://github.com/krzema12/snakeyaml-engine-kmp/blob/13a7d519148133cc2f9df7a0db72de2d774e68b0/buildSrc/src/main/kotlin/buildsrc/conventions/lang/kotlin-multiplatform.gradle.kts#L136",
          "timestamp": "2025-08-02T09:25:42+02:00",
          "tree_id": "300bd9c552f3fb1ce9dc52890b63e80384c03583",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/ca6c4b82156667a63c0186436ffac854f56b5df1"
        },
        "date": 1754120215292,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.37575233445557,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.74099818169014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.55385837886965,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 109.45617082999999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 145.32634413684562,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 130.9475253115,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.537330608121646,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.95402983925422,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.854247591977053,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 46.704236573855596,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.766162187234045,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.5609746150645,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.7488931372549,
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
          "id": "e59096add1aa2da5ff7cfe2c720518cfc6f71258",
          "message": "Use Java 11 for compiling and running tests (#489)\n\nThanks to this, we keep providing the lib for projects that are still on\nJava 8, and we can use newest kotest which requires at least Java\n11-equivalent bytecode.\n\nSee the discussion in\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/485 and\nhttps://kotlinlang.slack.com/archives/CT0G9SD7Z/p1754028241224579?thread_ts=1754028241.224579&cid=CT0G9SD7Z.\n\n# Testing\n\nFor tests, checked in\nhttps://github.com/krzema12/snakeyaml-engine-kmp/pull/400 that running\nwith kotest 6.0.0.M9 that requires Java 11 works fine.\n\nTo ensure that the release will still be compatible with Java 8, tested\nby inspecting the snapshot's JAR (I temporarily enabled publishing\nsnapshots from this branch, see\nhttps://central.sonatype.com/repository/maven-snapshots/it/krzeminski/snakeyaml-engine-kmp-jvm/3.1.2-SNAPSHOT/snakeyaml-engine-kmp-jvm-3.1.2-20250803.193827-16.jar):\n\n```\n> jar xf snakeyaml-engine-kmp-jvm-3.1.2-20250803.193827-16.jar\n> file it/krzeminski/snakeyaml/engine/kmp/api/YamlUnicodeReader.class\nit/krzeminski/snakeyaml/engine/kmp/api/YamlUnicodeReader.class: compiled Java class data, version 52.0 (Java 1.8)\n```",
          "timestamp": "2025-08-04T10:14:57+02:00",
          "tree_id": "0e4750a24c303f5386b004b856ac4ac5811071c8",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/e59096add1aa2da5ff7cfe2c720518cfc6f71258"
        },
        "date": 1754296076409,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 122.39941998431213,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 163.7836430475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.79453359178572,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 107.29765734693876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 26.48268092667729,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.7992253945946,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.35010795927715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 129.87886170961536,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.52542286988373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 27.500626330754915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.735057431590747,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 42.090686200362754,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 51.29808122282609,
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
          "id": "6176cd74a12bd456ef0175b3044de4546ba409f9",
          "message": "Migrate away from deprecated Kotlin/Gradle API (#487)\n\nRemoves these warnings:\n\n* ```\nw: ⚠️ 'org.jetbrains.kotlin.multiplatform' plugin 'withJava()'\nconfiguration deprecation.\nKotlin multiplatform plugin always configures Java sources compilation\nand 'withJava()' configuration is deprecated.\n   Please remove 'withJava()' method call from build configuration.\n   ```\n* ```\n'annotation class ExperimentalWasmDsl : Annotation' is deprecated. Moved\nto kotlin-gradle-plugin-annotations module.\n   ```",
          "timestamp": "2025-08-04T15:47:50+02:00",
          "tree_id": "62b20d65f7412dafaa55d40656dc1dcd6d6fc22f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6176cd74a12bd456ef0175b3044de4546ba409f9"
        },
        "date": 1754316064133,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.168231593192658,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 34.11385533630137,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.8667540865318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.39348196078431,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 158.30151977235585,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.4500559767345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.856267036645647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.31488961703847,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.89547329831247,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 43.68240192851038,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 50.97155644666667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 85.29321287008395,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.91283399268292,
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
          "id": "02872706e01a38e58690d37fdbed93678954640c",
          "message": "Change separator for YAML test suite test IDs (#490)\n\nThis is a prerequisite for upgrading to Gradle 9. There's a problem on\nWindows with the colon (`:`) in the paths (I think paths to test\nreports, newer Gradle apparently started creating files with the test\nIDs?), so let's not use it.",
          "timestamp": "2025-08-04T19:51:14+02:00",
          "tree_id": "cf9bd2aa3fe8994bc63207d7e64a801395e94c79",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/02872706e01a38e58690d37fdbed93678954640c"
        },
        "date": 1754330403611,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.59133603637848,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 101.10528551020407,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 135.2676593287926,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 136.12741187806483,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.965900448482138,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 24.041104891564423,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.29898651148239,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 50.58827402664789,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 58.92241544578313,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.826744474782796,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 35.671085475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 84.87990598821145,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 154.98224241578947,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a7d889f8fa80651215a611adec77d6117bc4634",
          "message": "chore(deps): update dependency gradle to v9 (#484)\n\nThis PR contains the following updates:\n\n| Package | Update | Change |\n|---|---|---|\n| [gradle](https://gradle.org)\n([source](https://redirect.github.com/gradle/gradle)) | major | `8.14.3`\n-> `9.0.0` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>gradle/gradle (gradle)</summary>\n\n###\n[`v9.0.0`](https://redirect.github.com/gradle/gradle/compare/v8.14.3...v9.0.0)\n\n[Compare\nSource](https://redirect.github.com/gradle/gradle/compare/v8.14.3...v9.0.0)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS40Ni4zIiwidXBkYXRlZEluVmVyIjoiNDEuNTEuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\n---------\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>\nCo-authored-by: Piotr Krzeminski <git@krzeminski.it>\nCo-authored-by: Piotr Krzemiński <3110813+krzema12@users.noreply.github.com>",
          "timestamp": "2025-08-04T20:18:22+02:00",
          "tree_id": "f5fb7ecf2c6a9491e6f87b2357acf537b095df2f",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/6a7d889f8fa80651215a611adec77d6117bc4634"
        },
        "date": 1754332360622,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 101.88188766518941,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 185.43978297916664,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.954173429536066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 36.202640193103456,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 69.33441252327425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.9879484,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 150.83350089043455,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.50280966551722,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 23.93796568658848,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.236773280906323,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.21003779099237,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 43.49328762308603,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.64234905102041,
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
          "id": "70a5d670cb7be6349b8548f8ffd80a8fe9ea11dd",
          "message": "Remove usage of Gradle toolchain (#491)\n\nLet's use the JDK that is available on the host. Thanks to requiring\nspecific JDK for Kotlin and Java compilation, Gradle will fail if no\nsufficiently new JDK is available.",
          "timestamp": "2025-08-05T08:38:23+02:00",
          "tree_id": "42d910b2a4427b87df69b84ad1319071f3035ddd",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/70a5d670cb7be6349b8548f8ffd80a8fe9ea11dd"
        },
        "date": 1754377482033,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 149.60529783656278,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 137.02361695679315,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 22.743663509426707,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 26.58312351289763,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 17.20234789041046,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 44.1138836376418,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 59.16630434556962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 68.31189883111647,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 23.16610497173503,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 41.355440235353534,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 67.46086157965807,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 100.93468067058822,
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
          "id": "8aef7e924b98cd4209c8e70a81d43eae4a88544a",
          "message": "Update JDK in CI to 24 (#492)\n\nLatest and greatest.\n\nI also refactored the workflow configs to have the version defined in a\nsingle place.",
          "timestamp": "2025-08-05T19:51:39+02:00",
          "tree_id": "ff49a098d671fffec7147f97aa76a955b95e4d77",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/8aef7e924b98cd4209c8e70a81d43eae4a88544a"
        },
        "date": 1754417418658,
        "tool": "jmh",
        "benches": [
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 22.62061201650335,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 44.571910976865674,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 75.24093722957102,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 99.71393859999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 110.45215276903859,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 215.81490322173914,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.81675554960586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 124.48781570188677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.462141481263146,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.772120611175648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 15.666259155373965,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 44.06658843934166,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 49.81638092947368,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4813e48fab850097b521df365ca95ee27181843b",
          "message": "chore(deps): update actions/download-artifact action to v5 (#495)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change |\n|---|---|---|---|\n|\n[actions/download-artifact](https://redirect.github.com/actions/download-artifact)\n| action | major | `v4` -> `v5` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the Dependency\nDashboard for more information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>actions/download-artifact (actions/download-artifact)</summary>\n\n###\n[`v5`](https://redirect.github.com/actions/download-artifact/compare/v4...v5)\n\n[Compare\nSource](https://redirect.github.com/actions/download-artifact/compare/v4...v5)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - At any time (no schedule defined),\nAutomerge - At any time (no schedule defined).\n\n🚦 **Automerge**: Enabled.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR was generated by [Mend Renovate](https://mend.io/renovate/).\nView the [repository job\nlog](https://developer.mend.io/github/krzema12/snakeyaml-engine-kmp).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0MS41MS4xIiwidXBkYXRlZEluVmVyIjoiNDEuNTEuMSIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\n---------\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-06T09:29:32Z",
          "tree_id": "5d6e6f183e51dcbe2b02db1c161e055898a7ec5e",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/4813e48fab850097b521df365ca95ee27181843b"
        },
        "date": 1754473088718,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 142.47694186937983,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 127.33900202294635,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 19.652648739859366,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.462640854790784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 16.843531097206014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 54.73144501409696,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 55.51238434673915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 81.86835275906967,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 142.552043940625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 70.34166956473355,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 102.96805294117648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 24.032956682646716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 37.82829628907563,
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
          "id": "137741a2c26f158844b7b7911f7ec855fe6ef712",
          "message": "[Port from snakeyaml-engine] Fix for parsing TAB-indented JSON (#497)\n\nFixes https://github.com/krzema12/snakeyaml-engine-kmp/issues/432.\n\nPorts\nhttps://bitbucket.org/snakeyaml/snakeyaml-engine/commits/553748c968e1b22969f1411e5e061ed3dfb96403,\nand also migrates one test modified in this commit from Java to Kotlin.",
          "timestamp": "2025-08-08T15:58:15+02:00",
          "tree_id": "4f9545276359c679f9cc110ac9fa9d4dfaeb0825",
          "url": "https://github.com/krzema12/snakeyaml-engine-kmp/commit/137741a2c26f158844b7b7911f7ec855fe6ef712"
        },
        "date": 1754662219478,
        "tool": "jmh",
        "benches": [
          {
            "name": "mingwX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 66.8917770452099,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 98.018456122449,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 113.55360755339807,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 211.92033974400002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 21.148477883182142,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 48.27604513913043,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 129.52542671350892,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 125.59293086157409,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.DumpBenchmark.dumpMapWithAllTypes",
            "value": 24.75816331329488,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 25.84184066636369,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "jvm.SnakeyamlEngineJvmLoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 18.93603613892262,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.DumpBenchmark.dumpMapWithAllTypes ( {} )",
            "value": 51.886888678097876,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 53.53204657356322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}